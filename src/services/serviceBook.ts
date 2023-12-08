import axios, { type AxiosResponse } from 'axios';

interface Book {
    title: string;
    author: string;
    description: string;
    publicationDate: string;
}

const API_URL = 'http://localhost:3001/books';

// CREATE
export async function createBook(book: Book): Promise<Book> {
  try {
    const response: AxiosResponse<Book> = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create book');
  }
}

// READ
export async function getBooks(): Promise<Book[]> {
  try {
    const response: AxiosResponse<Book[]> = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get books');
  }
}

export async function getBookById(id: number): Promise<Book> {
  try {
    const response: AxiosResponse<Book> = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get book');
  }
}

// UPDATE
export async function updateBook(id: number, book: Book): Promise<Book> {
  try {
    const response: AxiosResponse<Book> = await axios.put(`${API_URL}/${id}`, book);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update book');
  }
}

// DELETE
export async function deleteBook(id: number) {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Failed to delete book');
  }
}
