<template>
    <form @submit="loginClick">
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/services/auth';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const userStore = useUserStore();

const email = ref('');
const password = ref('');
const loginClick = (event: Event) => {
    event.preventDefault();
    login(email.value, password.value).then(async (response) => {
        if (response.status === 200) {
            const data = await response.json();
            userStore.username = data.username;
            userStore.token = data.token;
            userStore.role = data.role;
            router.push({ name: 'accueil' });
        } else {
            console.log('Erreur de connexion');
        }
    })
    // Effectuer l'action de connexion ici
    console.log('Connexion avec email:', email.value, 'et mot de passe:', password.value);
};
</script>
