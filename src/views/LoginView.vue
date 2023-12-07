<template>
    
    <form @submit="login">
        <h1>Connexion</h1>  
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
        </div>
        <div>
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Se connecter</button>
        <RouterLink to="/register">S'inscrire</RouterLink>
    </form>
</template>

<script lang="ts" setup>
import { defineProps,ref } from 'vue';

const email = ref('');
const password = ref('');
const login = (event: Event) => {
    event.preventDefault();
    // Effectuer l'action de connexion ici
    console.log('Connexion avec email:', email.value, 'et mot de passe:', password.value);
};
</script>
