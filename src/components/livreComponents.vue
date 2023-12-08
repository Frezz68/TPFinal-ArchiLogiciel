<template>
    <div class="book-section">
        <button v-if="userStore.role == 'librarian'" @click="deleteBookClick">Supprimer</button>
        <button v-if="userStore.role == 'librarian'" @click="editBook">Modifier</button>
        <h2>{{ title }}</h2>
        <p><strong>Auteur :</strong> {{ author }}</p>
        <p><strong>Genre :</strong> {{ genre }}</p>
        <p><strong>Nombre de livre :</strong> {{ availableCopies }}</p>
        <button v-if="userStore.role == 'user'" @click="reserveBook">Réservation</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/user';
import { deleteBook, updateBook } from '@/services/serviceBook';
import { reservationBook } from '@/services/serviceReservation';

export default defineComponent({
    props: {
        id: String,
        title: String,
        author: String,
        availableCopies: Number,
        genre: String,
    },
    data() {
        return {
            userStore: useUserStore()
        };
    },
    methods: {
        async deleteBookClick() {
            await deleteBook(this.id as string);
            // Supprimer le livre
            console.log('Supprimer le livre', this.title);
        },
        async editBook() {
            const data = {
                id: this.id as string,
                title: this.title as string,
                author: this.author as string,
                availableCopies: this.availableCopies as number,
                genre: this.genre as string,
            };
            await updateBook(this.id as string,data);
            // Modifier le livre
            console.log('Modifier le livre', this.title);
        },
        reserveBook() {
            console.log('idBook', this.id as string);
            
            reservationBook(this.id as string)
                .then(() => {
                    // Livre créé avec succès
                    console.log("Livre créé avec succès");
                })
                .catch((error) => {
                    // Erreur lors de la création du livre
                    console.error("Erreur lors de la création du livre :", error);
                });
        },
    },
    mounted() {
        // Récupérer les livres depuis le serveur
        console.log('Role', this.userStore.role);
    },
});
</script>
<style scoped>
.book-section {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 25%;
    height: 100%;
    margin: 20px;
}
</style>