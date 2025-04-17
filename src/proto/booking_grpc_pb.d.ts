// package: booking
// file: src/proto/booking.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as src_proto_booking_pb from "../../src/proto/booking_pb";

interface IBookingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createBooking: IBookingServiceService_ICreateBooking;
    getBooking: IBookingServiceService_IGetBooking;
    updateBooking: IBookingServiceService_IUpdateBooking;
    cancelBooking: IBookingServiceService_ICancelBooking;
    getUserBookings: IBookingServiceService_IGetUserBookings;
    getBarberBookings: IBookingServiceService_IGetBarberBookings;
    getAvailableTimeSlots: IBookingServiceService_IGetAvailableTimeSlots;
}

interface IBookingServiceService_ICreateBooking extends grpc.MethodDefinition<src_proto_booking_pb.CreateBookingRequest, src_proto_booking_pb.Booking> {
    path: "/booking.BookingService/CreateBooking";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_booking_pb.CreateBookingRequest>;
    requestDeserialize: grpc.deserialize<src_proto_booking_pb.CreateBookingRequest>;
    responseSerialize: grpc.serialize<src_proto_booking_pb.Booking>;
    responseDeserialize: grpc.deserialize<src_proto_booking_pb.Booking>;
}
interface IBookingServiceService_IGetBooking extends grpc.MethodDefinition<src_proto_booking_pb.GetBookingRequest, src_proto_booking_pb.Booking> {
    path: "/booking.BookingService/GetBooking";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_booking_pb.GetBookingRequest>;
    requestDeserialize: grpc.deserialize<src_proto_booking_pb.GetBookingRequest>;
    responseSerialize: grpc.serialize<src_proto_booking_pb.Booking>;
    responseDeserialize: grpc.deserialize<src_proto_booking_pb.Booking>;
}
interface IBookingServiceService_IUpdateBooking extends grpc.MethodDefinition<src_proto_booking_pb.UpdateBookingRequest, src_proto_booking_pb.Booking> {
    path: "/booking.BookingService/UpdateBooking";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_booking_pb.UpdateBookingRequest>;
    requestDeserialize: grpc.deserialize<src_proto_booking_pb.UpdateBookingRequest>;
    responseSerialize: grpc.serialize<src_proto_booking_pb.Booking>;
    responseDeserialize: grpc.deserialize<src_proto_booking_pb.Booking>;
}
interface IBookingServiceService_ICancelBooking extends grpc.MethodDefinition<src_proto_booking_pb.CancelBookingRequest, src_proto_booking_pb.CancelBookingResponse> {
    path: "/booking.BookingService/CancelBooking";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_booking_pb.CancelBookingRequest>;
    requestDeserialize: grpc.deserialize<src_proto_booking_pb.CancelBookingRequest>;
    responseSerialize: grpc.serialize<src_proto_booking_pb.CancelBookingResponse>;
    responseDeserialize: grpc.deserialize<src_proto_booking_pb.CancelBookingResponse>;
}
interface IBookingServiceService_IGetUserBookings extends grpc.MethodDefinition<src_proto_booking_pb.GetUserBookingsRequest, src_proto_booking_pb.BookingList> {
    path: "/booking.BookingService/GetUserBookings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_booking_pb.GetUserBookingsRequest>;
    requestDeserialize: grpc.deserialize<src_proto_booking_pb.GetUserBookingsRequest>;
    responseSerialize: grpc.serialize<src_proto_booking_pb.BookingList>;
    responseDeserialize: grpc.deserialize<src_proto_booking_pb.BookingList>;
}
interface IBookingServiceService_IGetBarberBookings extends grpc.MethodDefinition<src_proto_booking_pb.GetBarberBookingsRequest, src_proto_booking_pb.BookingList> {
    path: "/booking.BookingService/GetBarberBookings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_booking_pb.GetBarberBookingsRequest>;
    requestDeserialize: grpc.deserialize<src_proto_booking_pb.GetBarberBookingsRequest>;
    responseSerialize: grpc.serialize<src_proto_booking_pb.BookingList>;
    responseDeserialize: grpc.deserialize<src_proto_booking_pb.BookingList>;
}
interface IBookingServiceService_IGetAvailableTimeSlots extends grpc.MethodDefinition<src_proto_booking_pb.GetAvailableTimeSlotsRequest, src_proto_booking_pb.TimeSlotList> {
    path: "/booking.BookingService/GetAvailableTimeSlots";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_booking_pb.GetAvailableTimeSlotsRequest>;
    requestDeserialize: grpc.deserialize<src_proto_booking_pb.GetAvailableTimeSlotsRequest>;
    responseSerialize: grpc.serialize<src_proto_booking_pb.TimeSlotList>;
    responseDeserialize: grpc.deserialize<src_proto_booking_pb.TimeSlotList>;
}

export const BookingServiceService: IBookingServiceService;

export interface IBookingServiceServer extends grpc.UntypedServiceImplementation {
    createBooking: grpc.handleUnaryCall<src_proto_booking_pb.CreateBookingRequest, src_proto_booking_pb.Booking>;
    getBooking: grpc.handleUnaryCall<src_proto_booking_pb.GetBookingRequest, src_proto_booking_pb.Booking>;
    updateBooking: grpc.handleUnaryCall<src_proto_booking_pb.UpdateBookingRequest, src_proto_booking_pb.Booking>;
    cancelBooking: grpc.handleUnaryCall<src_proto_booking_pb.CancelBookingRequest, src_proto_booking_pb.CancelBookingResponse>;
    getUserBookings: grpc.handleUnaryCall<src_proto_booking_pb.GetUserBookingsRequest, src_proto_booking_pb.BookingList>;
    getBarberBookings: grpc.handleUnaryCall<src_proto_booking_pb.GetBarberBookingsRequest, src_proto_booking_pb.BookingList>;
    getAvailableTimeSlots: grpc.handleUnaryCall<src_proto_booking_pb.GetAvailableTimeSlotsRequest, src_proto_booking_pb.TimeSlotList>;
}

export interface IBookingServiceClient {
    createBooking(request: src_proto_booking_pb.CreateBookingRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    createBooking(request: src_proto_booking_pb.CreateBookingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    createBooking(request: src_proto_booking_pb.CreateBookingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    getBooking(request: src_proto_booking_pb.GetBookingRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    getBooking(request: src_proto_booking_pb.GetBookingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    getBooking(request: src_proto_booking_pb.GetBookingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    updateBooking(request: src_proto_booking_pb.UpdateBookingRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    updateBooking(request: src_proto_booking_pb.UpdateBookingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    updateBooking(request: src_proto_booking_pb.UpdateBookingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    cancelBooking(request: src_proto_booking_pb.CancelBookingRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.CancelBookingResponse) => void): grpc.ClientUnaryCall;
    cancelBooking(request: src_proto_booking_pb.CancelBookingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.CancelBookingResponse) => void): grpc.ClientUnaryCall;
    cancelBooking(request: src_proto_booking_pb.CancelBookingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.CancelBookingResponse) => void): grpc.ClientUnaryCall;
    getUserBookings(request: src_proto_booking_pb.GetUserBookingsRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    getUserBookings(request: src_proto_booking_pb.GetUserBookingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    getUserBookings(request: src_proto_booking_pb.GetUserBookingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    getBarberBookings(request: src_proto_booking_pb.GetBarberBookingsRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    getBarberBookings(request: src_proto_booking_pb.GetBarberBookingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    getBarberBookings(request: src_proto_booking_pb.GetBarberBookingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    getAvailableTimeSlots(request: src_proto_booking_pb.GetAvailableTimeSlotsRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.TimeSlotList) => void): grpc.ClientUnaryCall;
    getAvailableTimeSlots(request: src_proto_booking_pb.GetAvailableTimeSlotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.TimeSlotList) => void): grpc.ClientUnaryCall;
    getAvailableTimeSlots(request: src_proto_booking_pb.GetAvailableTimeSlotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.TimeSlotList) => void): grpc.ClientUnaryCall;
}

export class BookingServiceClient extends grpc.Client implements IBookingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createBooking(request: src_proto_booking_pb.CreateBookingRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public createBooking(request: src_proto_booking_pb.CreateBookingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public createBooking(request: src_proto_booking_pb.CreateBookingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public getBooking(request: src_proto_booking_pb.GetBookingRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public getBooking(request: src_proto_booking_pb.GetBookingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public getBooking(request: src_proto_booking_pb.GetBookingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public updateBooking(request: src_proto_booking_pb.UpdateBookingRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public updateBooking(request: src_proto_booking_pb.UpdateBookingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public updateBooking(request: src_proto_booking_pb.UpdateBookingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.Booking) => void): grpc.ClientUnaryCall;
    public cancelBooking(request: src_proto_booking_pb.CancelBookingRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.CancelBookingResponse) => void): grpc.ClientUnaryCall;
    public cancelBooking(request: src_proto_booking_pb.CancelBookingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.CancelBookingResponse) => void): grpc.ClientUnaryCall;
    public cancelBooking(request: src_proto_booking_pb.CancelBookingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.CancelBookingResponse) => void): grpc.ClientUnaryCall;
    public getUserBookings(request: src_proto_booking_pb.GetUserBookingsRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    public getUserBookings(request: src_proto_booking_pb.GetUserBookingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    public getUserBookings(request: src_proto_booking_pb.GetUserBookingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    public getBarberBookings(request: src_proto_booking_pb.GetBarberBookingsRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    public getBarberBookings(request: src_proto_booking_pb.GetBarberBookingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    public getBarberBookings(request: src_proto_booking_pb.GetBarberBookingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.BookingList) => void): grpc.ClientUnaryCall;
    public getAvailableTimeSlots(request: src_proto_booking_pb.GetAvailableTimeSlotsRequest, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.TimeSlotList) => void): grpc.ClientUnaryCall;
    public getAvailableTimeSlots(request: src_proto_booking_pb.GetAvailableTimeSlotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.TimeSlotList) => void): grpc.ClientUnaryCall;
    public getAvailableTimeSlots(request: src_proto_booking_pb.GetAvailableTimeSlotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_booking_pb.TimeSlotList) => void): grpc.ClientUnaryCall;
}
