<!-- BookPage.vue -->

<template>
  <Navbar/>
  <div class="page-content">
  <button v-if="userStore.role == 'librarian'" @click="addBook">Ajouter un livre</button>
    <h1>Liste des Livres</h1>
    <div class="book-container">
      <BookComponent
        v-for="(book, index) in books"
        :key="index"
        :title="book.title"
        :author="book.author"
        :availableCopies="book.availableCopies"
        :genre="book.genre"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookComponent from '../components/livreComponents.vue';
import Navbar from '../components/navbar.vue';
import { useUserStore } from '@/stores/user';
import { getBooks } from '@/services/serviceBook';

export default defineComponent({
  components: {
    BookComponent,
    Navbar
  },
  data() {
    return {
      books: [] as Book[], // Assurez-vous de spécifier le type Book pour le tableau books
      userStore: useUserStore(),
    };
  },
  methods: {
    addBook() {
      // Ajouter un livre
      console.log('Ajouter un livre');
    },
  },
  mounted() {
    // Récupérer les livres depuis le serveur
    console.log('Récupérer les livres depuis le serveur');
    getBooks().then((response: Book[]) => {
      console.log(response);
      this.books = response;
    }); 
  },
});
  
interface Book {
  id: number;
  title: string;
  author: string;
  availableCopies: number;
  genre: string;
}
</script>

<style scoped>
.page-content {
  margin-top: 75px; /* Ajustez cette valeur en fonction de la hauteur de votre navbar */
}
.book-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
