// package: booking
// file: src/proto/booking.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TimeSlot extends jspb.Message { 
    getStartTime(): string;
    setStartTime(value: string): TimeSlot;
    getEndTime(): string;
    setEndTime(value: string): TimeSlot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSlot.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSlot): TimeSlot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSlot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSlot;
    static deserializeBinaryFromReader(message: TimeSlot, reader: jspb.BinaryReader): TimeSlot;
}

export namespace TimeSlot {
    export type AsObject = {
        startTime: string,
        endTime: string,
    }
}

export class TimeSlotList extends jspb.Message { 
    clearTimeSlotsList(): void;
    getTimeSlotsList(): Array<TimeSlot>;
    setTimeSlotsList(value: Array<TimeSlot>): TimeSlotList;
    addTimeSlots(value?: TimeSlot, index?: number): TimeSlot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSlotList.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSlotList): TimeSlotList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSlotList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSlotList;
    static deserializeBinaryFromReader(message: TimeSlotList, reader: jspb.BinaryReader): TimeSlotList;
}

export namespace TimeSlotList {
    export type AsObject = {
        timeSlotsList: Array<TimeSlot.AsObject>,
    }
}

export class Booking extends jspb.Message { 
    getId(): string;
    setId(value: string): Booking;
    getUserId(): string;
    setUserId(value: string): Booking;
    getBarberId(): string;
    setBarberId(value: string): Booking;
    getStartTime(): string;
    setStartTime(value: string): Booking;
    getEndTime(): string;
    setEndTime(value: string): Booking;
    getServiceType(): ServiceType;
    setServiceType(value: ServiceType): Booking;
    getStatus(): BookingStatus;
    setStatus(value: BookingStatus): Booking;
    getNotes(): string;
    setNotes(value: string): Booking;
    getCreatedAt(): string;
    setCreatedAt(value: string): Booking;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Booking;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Booking.AsObject;
    static toObject(includeInstance: boolean, msg: Booking): Booking.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Booking, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Booking;
    static deserializeBinaryFromReader(message: Booking, reader: jspb.BinaryReader): Booking;
}

export namespace Booking {
    export type AsObject = {
        id: string,
        userId: string,
        barberId: string,
        startTime: string,
        endTime: string,
        serviceType: ServiceType,
        status: BookingStatus,
        notes: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class BookingList extends jspb.Message { 
    clearBookingsList(): void;
    getBookingsList(): Array<Booking>;
    setBookingsList(value: Array<Booking>): BookingList;
    addBookings(value?: Booking, index?: number): Booking;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BookingList.AsObject;
    static toObject(includeInstance: boolean, msg: BookingList): BookingList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BookingList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BookingList;
    static deserializeBinaryFromReader(message: BookingList, reader: jspb.BinaryReader): BookingList;
}

export namespace BookingList {
    export type AsObject = {
        bookingsList: Array<Booking.AsObject>,
    }
}

export class CreateBookingRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateBookingRequest;
    getBarberId(): string;
    setBarberId(value: string): CreateBookingRequest;
    getStartTime(): string;
    setStartTime(value: string): CreateBookingRequest;
    getServiceType(): ServiceType;
    setServiceType(value: ServiceType): CreateBookingRequest;
    getNotes(): string;
    setNotes(value: string): CreateBookingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBookingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBookingRequest): CreateBookingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBookingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBookingRequest;
    static deserializeBinaryFromReader(message: CreateBookingRequest, reader: jspb.BinaryReader): CreateBookingRequest;
}

export namespace CreateBookingRequest {
    export type AsObject = {
        userId: string,
        barberId: string,
        startTime: string,
        serviceType: ServiceType,
        notes: string,
    }
}

export class GetBookingRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBookingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookingRequest): GetBookingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookingRequest;
    static deserializeBinaryFromReader(message: GetBookingRequest, reader: jspb.BinaryReader): GetBookingRequest;
}

export namespace GetBookingRequest {
    export type AsObject = {
        id: string,
    }
}

export class UpdateBookingRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateBookingRequest;
    getStartTime(): string;
    setStartTime(value: string): UpdateBookingRequest;
    getServiceType(): ServiceType;
    setServiceType(value: ServiceType): UpdateBookingRequest;
    getNotes(): string;
    setNotes(value: string): UpdateBookingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBookingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBookingRequest): UpdateBookingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBookingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBookingRequest;
    static deserializeBinaryFromReader(message: UpdateBookingRequest, reader: jspb.BinaryReader): UpdateBookingRequest;
}

export namespace UpdateBookingRequest {
    export type AsObject = {
        id: string,
        startTime: string,
        serviceType: ServiceType,
        notes: string,
    }
}

export class CancelBookingRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): CancelBookingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelBookingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelBookingRequest): CancelBookingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelBookingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelBookingRequest;
    static deserializeBinaryFromReader(message: CancelBookingRequest, reader: jspb.BinaryReader): CancelBookingRequest;
}

export namespace CancelBookingRequest {
    export type AsObject = {
        id: string,
    }
}

export class CancelBookingResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): CancelBookingResponse;
    getMessage(): string;
    setMessage(value: string): CancelBookingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelBookingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CancelBookingResponse): CancelBookingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelBookingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelBookingResponse;
    static deserializeBinaryFromReader(message: CancelBookingResponse, reader: jspb.BinaryReader): CancelBookingResponse;
}

export namespace CancelBookingResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class GetUserBookingsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserBookingsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserBookingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserBookingsRequest): GetUserBookingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserBookingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserBookingsRequest;
    static deserializeBinaryFromReader(message: GetUserBookingsRequest, reader: jspb.BinaryReader): GetUserBookingsRequest;
}

export namespace GetUserBookingsRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetBarberBookingsRequest extends jspb.Message { 
    getBarberId(): string;
    setBarberId(value: string): GetBarberBookingsRequest;
    getDate(): string;
    setDate(value: string): GetBarberBookingsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBarberBookingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBarberBookingsRequest): GetBarberBookingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBarberBookingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBarberBookingsRequest;
    static deserializeBinaryFromReader(message: GetBarberBookingsRequest, reader: jspb.BinaryReader): GetBarberBookingsRequest;
}

export namespace GetBarberBookingsRequest {
    export type AsObject = {
        barberId: string,
        date: string,
    }
}

export class GetAvailableTimeSlotsRequest extends jspb.Message { 
    getBarberId(): string;
    setBarberId(value: string): GetAvailableTimeSlotsRequest;
    getDate(): string;
    setDate(value: string): GetAvailableTimeSlotsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAvailableTimeSlotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAvailableTimeSlotsRequest): GetAvailableTimeSlotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAvailableTimeSlotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAvailableTimeSlotsRequest;
    static deserializeBinaryFromReader(message: GetAvailableTimeSlotsRequest, reader: jspb.BinaryReader): GetAvailableTimeSlotsRequest;
}

export namespace GetAvailableTimeSlotsRequest {
    export type AsObject = {
        barberId: string,
        date: string,
    }
}

export enum BookingStatus {
    PENDING = 0,
    CONFIRMED = 1,
    CANCELLED = 2,
    COMPLETED = 3,
}

export enum ServiceType {
    HAIRCUT = 0,
    BEARD_TRIM = 1,
    HAIR_WASH = 2,
    FULL_SERVICE = 3,
}
