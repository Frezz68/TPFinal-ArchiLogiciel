<template>
  <form @submit="registerClick">
    <h1>S'inscrire</h1>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required>

    <label for="username">Username :</label>
    <input type="string" id="username" v-model="username" required>

    <label for="role">Sélectionnez un rôle :</label>
    <select v-model="selectedRole" id="role">
      <option value="user">Utilisateur</option>
      <option value="librarian">Employeur</option>
    </select>
    
    <label for="password">Mot de passe:</label>
    <input type="password" id="password" v-model="password" required>
    
    <button type="submit">S'inscrire</button>
    <RouterLink to="/">Déjà inscrit ?</RouterLink>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { register } from '@/services/auth';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();

const userStore = useUserStore();

const username = ref('');
const email = ref('');
const password = ref('');
const selectedRole = ref('');


const registerClick = (event: Event) => {
  event.preventDefault();
  // Effectuer des actions supplémentaires, comme envoyer les données au serveur
  register(username.value, password.value, email.value,selectedRole.value).then( async (response) => {
    if (response.status === 201) {
      const data = await response.json();
      userStore.token = data.token;
      userStore.role = data.role;
      router.push({ name: 'accueil' });
    } else {
      console.log('Erreur de connexion');
    }
  });
  // Réinitialiser les champs du formulaire
  console.log('Inscription avec nom:', username.value, 'email:', email.value, ', mot de passe:', password.value, 'et role:', selectedRole.value);
  username.value = '';
  email.value = '';
  password.value = '';
  selectedRole.value = '';
};
</script>
