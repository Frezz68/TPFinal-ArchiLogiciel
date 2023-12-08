import axios from 'axios';

export async function login(username: string, password: string) {
  try {
    const response = await axios.post('http://localhost:5002/api/v1/users/login', { username, password });
    // Gérer la réponse de l'API ici
    console.log('test', response);
    return response;
  } catch (error) {
    // Gérer les erreurs ici
    console.error(error);
  }
}
export async function register(username: string, password: string, email: string, role: string) {
  try {
    const response = await axios.post('http://localhost:5002/api/v1/users/register', { username, password, email, role });
    // Gérer la réponse de l'API ici
    console.log('test', response);
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error(error);
  }
}