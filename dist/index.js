"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hotel_1 = require("./models/hotel");
const reserva_1 = require("./models/reserva");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function Menu() {
    const hotel = new hotel_1.HotelSystem(50);
    console.log(" Bienvenido a nuestro hotel ");
    let opcion = 0;
    while (opcion <= 7) {
        console.log('\n--- Menú del Sistema de Hotel ---');
        console.log('1. Buscar reservación');
        console.log('2. Ver reservaciones ordenadas');
        console.log('3. Agregar reservación');
        console.log('4. Eliminar reservación');
        console.log('5. Ver todas las reservaciones');
        console.log('6. Ver habitaciones disponibles');
        console.log('7. Salir');
        const prompt = (0, prompt_sync_1.default)();
        const opcion = parseInt(prompt("Ingrese el número de la opción deseada:"));
        switch (opcion) {
            case 1:
                try {
                    const id = parseInt(prompt("Ingrese el ID de la reservación a buscar:") || '0');
                    const reserva = hotel.searchReservation(id);
                    console.log("Reservación encontrada:", reserva);
                }
                catch (error) {
                    console.log("error");
                }
                break;
            case 2:
                const sortedReservas = hotel.getSortReservations();
                console.log("Reservaciones ordenadas por fecha de check-in:", sortedReservas);
                break;
            case 3:
                try {
                    const newReserva = new reserva_1.Reserva(parseInt(prompt("Ingrese el ID de la nueva reservación:") || '0'), prompt("Ingrese el nombre:") || '', prompt("Ingrese la fecha de check-in (dd/mm):") || '', prompt("Ingrese la fecha de check-out (dd/mm):") || '', parseInt(prompt("Ingrese el número de habitación:") || '0'));
                    hotel.addReservation(newReserva);
                    console.log("Reservación agregada con éxito");
                }
                catch (error) {
                    console.error("no se reliso la reservacion");
                }
            case 4:
                try {
                    const idToRemove = parseInt(prompt("Ingrese el ID de la reservación a eliminar:") || '0');
                    const removedReserva = hotel.removeReservation(idToRemove);
                    console.log("Reservación eliminada:", removedReserva);
                }
                catch (error) {
                    console.log("erroe");
                }
                break;
            case 5:
                console.log('Todas las reservaciones:', hotel.getReservations());
                break;
            case 7:
                console.log('Gracias por usar el sistema. ¡Hasta luego!');
                break;
            default:
                console.log("Opción inválida. Por favor, ingrese un número del 1 al 6.");
                break;
        }
    }
}
Menu();
