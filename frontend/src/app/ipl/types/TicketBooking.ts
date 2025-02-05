<<<<<<< HEAD
import { Match } from "./Match";

export class TicketBooking {

    bookingId: number;
    email: string;
    match: Match;
    numberOfTickets: number;

    constructor(
        bookingId: number,
        email: string,
        match: Match,
        numberOfTickets: number
    ) {
        this.bookingId = bookingId;
        this.email = email;
        this.match = match;
        this.numberOfTickets = numberOfTickets;
    }

    displayInfo() {
=======

export class TicketBooking {
bookingId:number;
email:string;
matchId:number;
numberOfTickets:number;
constructor(bookingId:number,
    email:string,
    matchId:number,
    numberOfTickets:number){
        this.bookingId = bookingId;
        this.email = email;
        this.matchId =matchId;
        this.numberOfTickets = numberOfTickets;
    }
    displayInfo():void{
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
        console.log(`Booking ID: ${this.bookingId}`);
        console.log(`Email: ${this.email}`);
        console.log(`Number of Tickets: ${this.numberOfTickets}`);
    }
}