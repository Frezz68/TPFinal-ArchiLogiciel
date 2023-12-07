<template>
    <div class="book-section">
        <h2>{{ this.title }}</h2>
        <p><strong>Auteur :</strong> {{ this.author }}</p>
        <p><strong>Date de parution :</strong> {{ this.publicationDate }}</p>
        <p><strong>Description :</strong> {{ this.truncatedDescription }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        title: String,
        author: String,
        publicationDate: String,
        description: String,
    },
    computed: {
        truncatedDescription(): string {
            // Afficher les premiers 100 caractères de la description
            return this.description.substring(0, 80) + ' ...';
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