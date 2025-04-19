// src/services/grpc-service.ts
import * as grpc from "@grpc/grpc-js";
import config from "../config";

// Import the generated proto types
import { BookingServiceClient } from "../proto/booking_grpc_pb";
import {
  Booking,
  CreateBookingRequest,
  GetUserBookingsRequest,
  GetBarberBookingsRequest,
  ServiceType,
} from "../proto/booking_pb";

export interface BookingInterface {
  id: string;
  user_id: string;
  barber_id: string;
  start_time: string;
  end_time: string;
  service_type: string;
  status: string;
  notes: string;
  created_at: string;
  updated_at: string;
}

export class GrpcService {
  private client: BookingServiceClient;
  private metadata: grpc.Metadata | undefined;

  constructor(authToken?: string) {
    let credentials = grpc.credentials.createInsecure();
    this.client = new BookingServiceClient(
      `${config.grpc.host}:${config.grpc.port}`,
      credentials
    );

    if (authToken) {
      this.metadata = new grpc.Metadata();
      this.metadata.add("authorization", `Bearer ${authToken}`);
    }
  }

  createBooking(bookingData: BookingInterface): Promise<BookingInterface> {
    return new Promise((resolve, reject) => {
      const request = new CreateBookingRequest();
      if (!this.metadata) {
        reject(new Error("Authentication metadata is required"));
        return;
      }

      request.setUserId(bookingData.user_id);
      request.setBarberId(bookingData.barber_id);
      request.setStartTime(bookingData.start_time);
      request.setServiceType(
        ServiceType[bookingData.service_type as keyof typeof ServiceType]
      );

      if (bookingData.notes) {
        request.setNotes(bookingData.notes);
      }

      this.client.createBooking(request, this.metadata, (error, response) => {
        if (error) {
          reject(new Error(`gRPC service error: ${error.message}`));
        } else {
          resolve(this.formatBooking(response));
        }
      });
    });
  }

  getUserBookings(userId: string): Promise<BookingInterface[]> {
    return new Promise((resolve, reject) => {
      const request = new GetUserBookingsRequest();
      request.setUserId(userId);

      if (!this.metadata) {
        reject(new Error("Authentication metadata is required"));
        return;
      }

      this.client.getUserBookings(request, this.metadata, (error, response) => {
        if (error) {
          reject(new Error(`gRPC service error: ${error.message}`));
        } else {
          const bookings = response
            .getBookingsList()
            .map((booking) => this.formatBooking(booking));
          resolve(bookings);
        }
      });
    });
  }

  getBarberBookings(barberId: string): Promise<BookingInterface[]> {
    return new Promise((resolve, reject) => {
      const request = new GetBarberBookingsRequest();
      request.setBarberId(barberId);

      if (!this.metadata) {
        reject(new Error("Authentication metadata is required"));
        return;
      }

      this.client.getBarberBookings(
        request,
        this.metadata,
        (error, response) => {
          if (error) {
            reject(new Error(`gRPC service error: ${error.message}`));
          } else {
            const bookings = response
              .getBookingsList()
              .map((booking) => this.formatBooking(booking));
            resolve(bookings);
          }
        }
      );
    });
  }

  private formatBooking(booking: Booking): BookingInterface {
    return {
      id: booking.getId(),
      user_id: booking.getUserId(),
      barber_id: booking.getBarberId(),
      start_time: booking.getStartTime(),
      end_time: booking.getEndTime(),
      service_type: booking.getServiceType().toString(),
      status: booking.getStatus().toString(),
      notes: booking.getNotes(),
      created_at: booking.getCreatedAt(),
      updated_at: booking.getUpdatedAt(),
    };
  }
}
