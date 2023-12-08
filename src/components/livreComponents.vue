<template>
    <div class="book-section">
        <button v-if="userStore.role == 'librarian'" @click="deleteBookClick">Supprimer</button>
        <button v-if="userStore.role == 'librarian'" @click="editBook">Modifier</button>
        <h2>{{ title }}</h2>
        <p><strong>Auteur :</strong> {{ author }}</p>
        <p><strong>Genre :</strong> {{ genre }}</p>
        <p><strong>Nombre de livre :</strong> {{ availableCopies }}</p>
        <button v-if="userStore.role == 'user'" @click="openModal">Réservation</button>
        <book-reservation-modal
            :title="title"
            :author="author"
            :availableCopies="availableCopies"
            :genre="genre"
            v-if="showModal"
            @close="closeModal"
            @reserve="reserveBook"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/user';
import BookReservationModal from '../components/modalReservationBook.vue';
import { deleteBook, updateBook } from '@/services/serviceBook';
import { reservationBook } from '@/services/serviceReservation';

export default defineComponent({
    components: {
    BookReservationModal,
    },
    props: {
        id: Number,
        title: String,
        author: String,
        availableCopies: Number,
        genre: String,
    },
    data() {
        return {
            userStore: useUserStore(),
            showModal: false,
        };
    },
    methods: {
        async deleteBookClick() {
            await deleteBook(this.id as number);
            // Supprimer le livre
            console.log('Supprimer le livre', this.title);
        },
        async editBook() {
            const data = {
                id: this.id as number,
                title: this.title as string,
                author: this.author as string,
                availableCopies: this.availableCopies as number,
                genre: this.genre as string,
            };
            await updateBook(this.id as number,data);
            // Modifier le livre
            console.log('Modifier le livre', this.title);
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        reserveBook(id: Number, dateDebutReservation: string, dateFinReservation: string) {
            // Appeler le service pour créer le livre
            console.log('Réserver le livre', id, dateDebutReservation, dateFinReservation);
            var result = reservationBook(id, dateDebutReservation, dateFinReservation)
                .then(() => {
                    // Livre créé avec succès
                    console.log("Livre créé avec succès");
                })
                .catch((error) => {
                    // Erreur lors de la création du livre
                    console.error("Erreur lors de la création du livre :", error);
                });
            if (result != null) {
                // Fermer la modal
                this.closeModal();
            }
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