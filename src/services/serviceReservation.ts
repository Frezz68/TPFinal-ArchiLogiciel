import axios, { type AxiosResponse } from 'axios';
import { useUserStore } from '@/stores/user';

interface Reservation {
    idBook: Number;
    dateDebutReservation: String;
    dateFinReservation: String;
}

const API_URL = 'http://localhost:5002/api/v1/users';

// RESERVATON
export async function reservationBook(idBook : string): Promise<Reservation> {
    try {
        const userStore= useUserStore();
        const userId = userStore.userId;
        const axiosConfig = {
            headers: {
              'Authorization': `Bearer ${userStore.token}`, // Ajoutez le token JWT dans l'en-tête Authorization
              'Content-Type': 'application/json', // Spécifiez le type de contenu JSON
            },
        };
        const reservationBook = {
            idBook: idBook,
            userId: userId
        };
        console.log(reservationBook)
        const response: AxiosResponse<Reservation> = await axios.post(`${API_URL}/reserve-book`, reservationBook, axiosConfig);
        return response.data;
    } catch (error) {
        throw new Error('Failed to reserve book');
    }
}