<!-- Navbar.vue -->

<template>
    <div class="navbar">
        <div class="search-bar">
            <input v-model="searchQuery" type="text" class="search-input" placeholder="Rechercher...">
        </div>
        <div class="user-logo">
            <img src="../assets/userLogo.jpeg" alt="User Logo">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({  
    data() {
        return {
            searchQuery: '',
        };
    },
});
</script>

<style scoped>

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #333;
    padding: 15px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 1000; /* Assurez-vous que la navbar est au-dessus du contenu */
}
.search-bar {
    flex-grow: 1;
    padding: 0 40px;
    width: 50%;
}

.search-input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

.user-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    overflow: hidden;
}

.user-logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
