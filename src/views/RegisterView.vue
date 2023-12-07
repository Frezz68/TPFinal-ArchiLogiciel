<template>
  <form @submit="register">
    <h1>S'inscrire</h1>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required>
    
    <label for="password">Mot de passe:</label>
    <input type="password" id="password" v-model="password" required>
    
    <button type="submit">S'inscrire</button>
    <RouterLink to="/">Déjà inscrit ?</RouterLink>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');

const register = (event: Event) => {
  event.preventDefault();
  
  // Effectuer des actions supplémentaires, comme envoyer les données au serveur
  
  // Réinitialiser les champs du formulaire
  console.log('Inscription avec nom:', name.value, 'email:', email.value, 'et mot de passe:', password.value);
  name.value = '';
  email.value = '';
  password.value = '';
};
</script>
