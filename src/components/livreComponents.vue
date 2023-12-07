<template>
    <div class="book-section">
        <button v-if="userStore.role == 'B'" @click="deleteBookClick">Supprimer</button>
        <button v-if="userStore.role == 'B'" @click="editBook">Modifier</button>
        <h2>{{ title }}</h2>
        <p><strong>Auteur :</strong> {{ author }}</p>
        <p><strong>Date de parution :</strong> {{ publicationDate }}</p>
        <p><strong>Description :</strong> {{ truncatedDescription }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { deleteBook, updateBook } from '@/services/serviceBook';
import { useUserStore } from '@/stores/user';

export default defineComponent({
    props: {
        id: Number,
        title: String,
        author: String,
        publicationDate: String,
        description: String,
    },
    data() {
        return {
            userStore: useUserStore(),
        };
    },
    computed: {
        truncatedDescription(): string {
            // Afficher les premiers 100 caractères de la description
            return (this.description as string).substring(0, 80) + ' ...';
        },
    },
    methods: {
        async deleteBookClick() {
            await deleteBook(this.id as number);
            // Supprimer le livre
            console.log('Supprimer le livre', this.title);
        },
        async editBook() {
            const data = {
                title: this.title as string,
                author: this.author as string,
                publicationDate: this.publicationDate as string,
                description: this.description as string,
            };
            await updateBook(this.id as number,data);
            // Modifier le livre
            console.log('Modifier le livre', this.title);
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