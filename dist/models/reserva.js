"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
class Reserva {
    constructor(id, nombre, checkIn, checkOut, roomNumber) {
        this.id = id;
        this.nombre = nombre;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.roomNumber = roomNumber;
    }
}
exports.Reserva = Reserva;
