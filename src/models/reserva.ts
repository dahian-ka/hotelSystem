export class Reserva {
  id: number;
  nombre: string;
  checkIn: string;
   // formato "dd/mm"
  checkOut: string; 
  roomNumber: number;

  constructor(
  id: number, 
  nombre: string, 
  checkIn: string, 
  checkOut: string, 
  roomNumber: number) 
  {
      this.id = id;
      this.nombre = nombre;
      this.checkIn = checkIn;
      this.checkOut = checkOut;
      this.roomNumber = roomNumber;
  }}