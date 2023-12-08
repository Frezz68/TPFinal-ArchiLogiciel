<template>
    <div class="book-section">
        <h2>{{ title }}</h2>
        <p><strong>Auteur :</strong> {{ author }}</p>
        <p><strong>Date de parution :</strong> {{ publicationDate }}</p>
        <p><strong>Description :</strong> {{ truncatedDescription }}</p>
        <button v-if="userStore.role != 'A'" @click="openModal">Réservation</button>
        <book-reservation-modal
            :title="title"
            :author="author"
            :publicationDate="publicationDate"
            :description="description"
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

export default defineComponent({
    components: {
    BookReservationModal,
    },
    props: {
        title: String,
        author: String,
        publicationDate: String,
        description: String,
    },
    data() {
        return {
            userStore: useUserStore(),
            showModal: false,
        };
    },
    computed: {
        truncatedDescription(): string {
            // Afficher les premiers 100 caractères de la description
            return this.description.substring(0, 80) + ' ...';
        },
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        reserveBook() {
            // Appeler le service pour créer le livre
            var result = ServiceBook.create(this.title, this.author, this.publicationDate, this.description)
                .then(() => {
                    // Livre créé avec succès
                    console.log("Livre créé avec succès");
                })
                .catch((error) => {
                    // Erreur lors de la création du livre
                    console.error("Erreur lors de la création du livre :", error);
                });
            if (result) {
                // Fermer la modal
                this.closeModal();
            }
        },
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