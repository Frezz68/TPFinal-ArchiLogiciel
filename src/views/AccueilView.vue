<!-- BookPage.vue -->

<template>
  <Navbar/>
  <div class="page-content">
  <button v-if="userStore.role == 'librarian'" @click="openModal">Ajouter un livre</button>
    <BookModal ref="bookModal" @add-book="handleAddBook"/>
    <h1>Liste des Livres</h1>
    <div class="book-container">
      <BookComponent
        v-for="(book, index) in books"
        :key="index"
        :id="book._id"
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
import BookModal from '@/components/BookModal.vue'
import Navbar from '../components/navbar.vue';
import { useUserStore } from '@/stores/user';
import { getBooks, createBook } from '@/services/serviceBook';

export default defineComponent({
  components: {
    BookComponent,
    Navbar,
    BookModal
  },
  data() {
    return {
      books: [] as Book[], // Assurez-vous de spécifier le type Book pour le tableau books
      userStore: useUserStore(),
      showModal: false
    };
  },
  methods: {
    openModal() {
          const bookModal = this.$refs.bookModal as any & { openModal: () => void };

          bookModal.openModal();
        },
    handleAddBook(book: Book) {
      createBook(book);
      console.log('Livre ajouté :', book);
      // Traitez ici l'ajout du livre (envoi au serveur, ajout à une liste, etc.)
    }
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
  _id: string;
  ISBN: string;
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
