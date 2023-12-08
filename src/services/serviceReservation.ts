import axios, { type AxiosResponse } from 'axios';

interface Reservation {
    idBook: Number;
    dateDebutReservation: String;
    dateFinReservation: String;
}

const API_URL = 'http://localhost:3001/reservation';

// RESERVATON
export async function reservationBook(idBook : Number, dateDebutReservation : String, dateFinReservation : String): Promise<Reservation> {
    try {
        const response: AxiosResponse<Reservation> = await axios.post(API_URL, {idBook, dateDebutReservation, dateFinReservation});
        return response.data;
    } catch (error) {
        throw new Error('Failed to create book');
    }
}