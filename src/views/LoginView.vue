<template>
    <form @submit="loginClick">
        <h1>Connexion</h1>  
        <div>
            <label for="username">Username :</label>
            <input type="string" id="username" v-model="username" required>
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

const username = ref('');
const password = ref('');
const loginClick = (event: Event) => {
    event.preventDefault();
    login(username.value, password.value).then(async (response) => {
        console.log("tetete",response);
        if (response.status === 200) {
            const data = await response.data;
            userStore.token = data.token;
            console.log("token",data.userdata.role);
            userStore.role = data.userdata.role;
            router.push('/accueil');
        } else {
            console.log('Erreur de connexion');
        }
    })
    // Effectuer l'action de connexion ici
    console.log('Connexion avec email:', username.value, 'et mot de passe:', password.value);
};
</script>
