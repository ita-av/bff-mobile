// src/services/grpc-service.ts
import * as grpc from "@grpc/grpc-js";
import * as path from "path";
import config from "../config";

// Import the generated proto types
import { BookingServiceClient } from "../proto/booking_grpc_pb";
import {
  Booking,
  BookingList,
  CreateBookingRequest,
  GetUserBookingsRequest,
  GetBarberBookingsRequest,
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

  constructor(authToken?: string) {
    // Set up credentials
    let credentials = grpc.credentials.createInsecure();
    const metadata = new grpc.Metadata();

    if (authToken) {
      metadata.add("authorization", `Bearer ${authToken}`);
    }

    // Create client
    this.client = new BookingServiceClient(
      `${config.grpc.host}:${config.grpc.port}`,
      credentials
    );
  }

  createBooking(bookingData: any): Promise<BookingInterface> {
    return new Promise((resolve, reject) => {
      const request = new CreateBookingRequest();
      request.setUserId(bookingData.user_id);
      request.setBarberId(bookingData.barber_id);
      request.setStartTime(bookingData.start_time);
      request.setServiceType(bookingData.service_type);

      if (bookingData.notes) {
        request.setNotes(bookingData.notes);
      }

      this.client.createBooking(request, (error, response) => {
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

      this.client.getUserBookings(request, (error, response) => {
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

  getBarberBookings(
    barberId: string,
    date?: string
  ): Promise<BookingInterface[]> {
    return new Promise((resolve, reject) => {
      const request = new GetBarberBookingsRequest();
      request.setBarberId(barberId);

      if (date) {
        request.setDate(date);
      }

      this.client.getBarberBookings(request, (error, response) => {
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
