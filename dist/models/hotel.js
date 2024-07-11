"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelSystem = void 0;
class HotelSystem {
    constructor(rooms) {
        this.reservations = [];
        this.rooms = rooms;
    }
    searchReservation(id) {
        const reservation = this.reservations.find(r => r.id === id);
        if (!reservation) {
            throw new Error("La reservación no fue encontrada");
        }
        return reservation;
    }
    getSortReservations() {
        return [...this.reservations].sort((a, b) => {
            return new Date(a.checkIn).getTime() - new Date(b.checkIn).getTime();
        });
    }
    addReservation(reservation) {
        const isRoomAvailable = this.getAvailableRooms(reservation.checkIn, reservation.checkOut)
            .includes(reservation.roomNumber);
        if (!isRoomAvailable) {
            throw new Error("La habitación no está disponible");
        }
        this.reservations.push(reservation);
    }
    removeReservation(id) {
        const index = this.reservations.findIndex(res => res.id === id);
        if (index === -1) {
            throw new Error("La reservación que se busca remover no existe");
        }
        const [removedReserva] = this.reservations.splice(index, 1);
        return removedReserva;
    }
    getReservations() {
        return this.reservations;
    }
    getAvailableRooms(checkIn, checkOut) {
        const occupiedRooms = new Set(this.reservations
            .filter(r => this.datesOverlap(r.checkIn, r.checkOut, checkIn, checkOut))
            .map(r => r.roomNumber));
        return Array.from({ length: this.rooms }, (_, i) => i + 1)
            .filter(room => !occupiedRooms.has(room));
    }
    datesOverlap(start1, end1, start2, end2) {
        const [d1, m1] = start1.split('/').map(Number);
        const [d2, m2] = end1.split('/').map(Number);
        const [d3, m3] = start2.split('/').map(Number);
        const [d4, m4] = end2.split('/').map(Number);
        const date1 = new Date(2024, m1 - 1, d1);
        const date2 = new Date(2024, m2 - 1, d2);
        const date3 = new Date(2024, m3 - 1, d3);
        const date4 = new Date(2024, m4 - 1, d4);
        return date1 < date4 && date3 < date2;
    }
}
exports.HotelSystem = HotelSystem;
