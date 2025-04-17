// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_proto_booking_pb = require('../../src/proto/booking_pb.js');

function serialize_booking_Booking(arg) {
  if (!(arg instanceof src_proto_booking_pb.Booking)) {
    throw new Error('Expected argument of type booking.Booking');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_Booking(buffer_arg) {
  return src_proto_booking_pb.Booking.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_BookingList(arg) {
  if (!(arg instanceof src_proto_booking_pb.BookingList)) {
    throw new Error('Expected argument of type booking.BookingList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_BookingList(buffer_arg) {
  return src_proto_booking_pb.BookingList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_CancelBookingRequest(arg) {
  if (!(arg instanceof src_proto_booking_pb.CancelBookingRequest)) {
    throw new Error('Expected argument of type booking.CancelBookingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_CancelBookingRequest(buffer_arg) {
  return src_proto_booking_pb.CancelBookingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_CancelBookingResponse(arg) {
  if (!(arg instanceof src_proto_booking_pb.CancelBookingResponse)) {
    throw new Error('Expected argument of type booking.CancelBookingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_CancelBookingResponse(buffer_arg) {
  return src_proto_booking_pb.CancelBookingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_CreateBookingRequest(arg) {
  if (!(arg instanceof src_proto_booking_pb.CreateBookingRequest)) {
    throw new Error('Expected argument of type booking.CreateBookingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_CreateBookingRequest(buffer_arg) {
  return src_proto_booking_pb.CreateBookingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_GetAvailableTimeSlotsRequest(arg) {
  if (!(arg instanceof src_proto_booking_pb.GetAvailableTimeSlotsRequest)) {
    throw new Error('Expected argument of type booking.GetAvailableTimeSlotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_GetAvailableTimeSlotsRequest(buffer_arg) {
  return src_proto_booking_pb.GetAvailableTimeSlotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_GetBarberBookingsRequest(arg) {
  if (!(arg instanceof src_proto_booking_pb.GetBarberBookingsRequest)) {
    throw new Error('Expected argument of type booking.GetBarberBookingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_GetBarberBookingsRequest(buffer_arg) {
  return src_proto_booking_pb.GetBarberBookingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_GetBookingRequest(arg) {
  if (!(arg instanceof src_proto_booking_pb.GetBookingRequest)) {
    throw new Error('Expected argument of type booking.GetBookingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_GetBookingRequest(buffer_arg) {
  return src_proto_booking_pb.GetBookingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_GetUserBookingsRequest(arg) {
  if (!(arg instanceof src_proto_booking_pb.GetUserBookingsRequest)) {
    throw new Error('Expected argument of type booking.GetUserBookingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_GetUserBookingsRequest(buffer_arg) {
  return src_proto_booking_pb.GetUserBookingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_TimeSlotList(arg) {
  if (!(arg instanceof src_proto_booking_pb.TimeSlotList)) {
    throw new Error('Expected argument of type booking.TimeSlotList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_TimeSlotList(buffer_arg) {
  return src_proto_booking_pb.TimeSlotList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booking_UpdateBookingRequest(arg) {
  if (!(arg instanceof src_proto_booking_pb.UpdateBookingRequest)) {
    throw new Error('Expected argument of type booking.UpdateBookingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_booking_UpdateBookingRequest(buffer_arg) {
  return src_proto_booking_pb.UpdateBookingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookingServiceService = exports.BookingServiceService = {
  // Create a new booking
createBooking: {
    path: '/booking.BookingService/CreateBooking',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_booking_pb.CreateBookingRequest,
    responseType: src_proto_booking_pb.Booking,
    requestSerialize: serialize_booking_CreateBookingRequest,
    requestDeserialize: deserialize_booking_CreateBookingRequest,
    responseSerialize: serialize_booking_Booking,
    responseDeserialize: deserialize_booking_Booking,
  },
  // Get a specific booking by ID
getBooking: {
    path: '/booking.BookingService/GetBooking',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_booking_pb.GetBookingRequest,
    responseType: src_proto_booking_pb.Booking,
    requestSerialize: serialize_booking_GetBookingRequest,
    requestDeserialize: deserialize_booking_GetBookingRequest,
    responseSerialize: serialize_booking_Booking,
    responseDeserialize: deserialize_booking_Booking,
  },
  // Update an existing booking
updateBooking: {
    path: '/booking.BookingService/UpdateBooking',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_booking_pb.UpdateBookingRequest,
    responseType: src_proto_booking_pb.Booking,
    requestSerialize: serialize_booking_UpdateBookingRequest,
    requestDeserialize: deserialize_booking_UpdateBookingRequest,
    responseSerialize: serialize_booking_Booking,
    responseDeserialize: deserialize_booking_Booking,
  },
  // Cancel a booking
cancelBooking: {
    path: '/booking.BookingService/CancelBooking',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_booking_pb.CancelBookingRequest,
    responseType: src_proto_booking_pb.CancelBookingResponse,
    requestSerialize: serialize_booking_CancelBookingRequest,
    requestDeserialize: deserialize_booking_CancelBookingRequest,
    responseSerialize: serialize_booking_CancelBookingResponse,
    responseDeserialize: deserialize_booking_CancelBookingResponse,
  },
  // Get all bookings for a user
getUserBookings: {
    path: '/booking.BookingService/GetUserBookings',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_booking_pb.GetUserBookingsRequest,
    responseType: src_proto_booking_pb.BookingList,
    requestSerialize: serialize_booking_GetUserBookingsRequest,
    requestDeserialize: deserialize_booking_GetUserBookingsRequest,
    responseSerialize: serialize_booking_BookingList,
    responseDeserialize: deserialize_booking_BookingList,
  },
  // Get all bookings for a barber
getBarberBookings: {
    path: '/booking.BookingService/GetBarberBookings',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_booking_pb.GetBarberBookingsRequest,
    responseType: src_proto_booking_pb.BookingList,
    requestSerialize: serialize_booking_GetBarberBookingsRequest,
    requestDeserialize: deserialize_booking_GetBarberBookingsRequest,
    responseSerialize: serialize_booking_BookingList,
    responseDeserialize: deserialize_booking_BookingList,
  },
  // Get available time slots for a barber on a specific date
getAvailableTimeSlots: {
    path: '/booking.BookingService/GetAvailableTimeSlots',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_booking_pb.GetAvailableTimeSlotsRequest,
    responseType: src_proto_booking_pb.TimeSlotList,
    requestSerialize: serialize_booking_GetAvailableTimeSlotsRequest,
    requestDeserialize: deserialize_booking_GetAvailableTimeSlotsRequest,
    responseSerialize: serialize_booking_TimeSlotList,
    responseDeserialize: deserialize_booking_TimeSlotList,
  },
};

exports.BookingServiceClient = grpc.makeGenericClientConstructor(BookingServiceService, 'BookingService');
