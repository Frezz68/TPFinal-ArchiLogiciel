import axios, { type AxiosResponse } from 'axios';
import { useUserStore } from '@/stores/user';

interface Book {
  _id: string;
  ISBN: string;
  title: string;
  author: string;
  availableCopies: number;
  genre: string;
}

const API_URL = 'http://localhost:5002/api/v1/users';

// READ
export async function getBooks(): Promise<Book[]> {
  try {
    const response: AxiosResponse<Book[]> = await axios.get(`${API_URL}/list-all-books`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get books');
  }
}

export async function getBookById(id: string): Promise<Book> {
  try {
    const response: AxiosResponse<Book> = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get book');
  }
}

// CREATE
export async function createBook(book: Book): Promise<Book> {
  try {
    const userStore= useUserStore();
    const axiosConfig = {
      headers: {
        'Authorization': `Bearer ${userStore.token}`, // Ajoutez le token JWT dans l'en-tête Authorization
        'Content-Type': 'application/json', // Spécifiez le type de contenu JSON
      },
    };
    const min = 0;
    const max = 9999999999;

    // Générer un nombre aléatoire entre min et max inclus
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Formater le nombre avec des zéros à gauche
    const formattedNumber = randomNumber.toString().padStart(10, '0');
    book.ISBN = formattedNumber;
    console.log(book)
    const response: AxiosResponse<Book> = await axios.post(`${API_URL}/add-book`, book, axiosConfig);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create book');
  }
}
// UPDATE
export async function updateBook(id: string, book: Book): Promise<Book> {
  try {
    const response: AxiosResponse<Book> = await axios.put(`${API_URL}/${id}`, book);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update book');
  }
}

// DELETE
export async function deleteBook(id: string) {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Failed to delete book');
  }
}
