import axios from 'axios';

export async function login(username: string, password: string) {
  try {
    const response = await axios.post('http://localhost:3001/login', { username, password });
    // Gérer la réponse de l'API ici
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error(error);
  }
}