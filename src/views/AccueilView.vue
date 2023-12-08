<!-- BookPage.vue -->

<template>
  <Navbar/>
  <div class="page-content">
    <button v-if="userStore.role != 'B'" @click="openModal">Ajouter un livre</button>
    <BookModal ref="bookModal" @add-book="handleAddBook"/>
    <h1>Liste des Livres</h1>
    <div class="book-container">
      <BookComponent
        v-for="(book, index) in books"
        :key="index"
        :title="book.title"
        :author="book.author"
        :publicationDate="book.publicationDate"
        :description="book.description"
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

export default defineComponent({
  components: {
    BookComponent,
    Navbar,
    BookModal
  },
  data() {
    return {
      books: [
        {
          title: 'Titre du Livre 1',
          author: 'Auteur 1',
          publicationDate: '2022-01-01',
          description: 'Ceci est le début de la description du livre 1.',
        },
        {
          title: 'Titre du Livre 2',
          author: 'Auteur 2',
          publicationDate: '2022-02-15',
          description: 'Ceci est le début de la description du livre 2.',
        },
        {
          title: 'Titre du Livre 3',
          author: 'Auteur 3',
          publicationDate: '2022-02-15',
          description: 'Dans un monde où la technologie et la magie se rencontrent, suivez l épopée captivante d un jeune prodige, héritier d un pouvoir ancien. Entre alliances fragiles et trahisons inattendues, l aventure dévoile des secrets enfouis depuis des siècles, mettant en péril l équilibre fragile entre les royaumes.',
        },
        {
          title: 'Titre du Livre 1',
          author: 'Auteur 1',
          publicationDate: '2022-01-01',
          description: 'Ceci est le début de la description du livre 1.',
        },
        {
          title: 'Titre du Livre 2',
          author: 'Auteur 2',
          publicationDate: '2022-02-15',
          description: 'Ceci est le début de la description du livre 2.',
        },
        {
          title: 'Titre du Livre 3',
          author: 'Auteur 3',
          publicationDate: '2022-02-15',
          description: 'Dans un monde où la technologie et la magie se rencontrent, suivez l épopée captivante d un jeune prodige, héritier d un pouvoir ancien. Entre alliances fragiles et trahisons inattendues, l aventure dévoile des secrets enfouis depuis des siècles, mettant en péril l équilibre fragile entre les royaumes.',
        },
        {
          title: 'Titre du Livre 1',
          author: 'Auteur 1',
          publicationDate: '2022-01-01',
          description: 'Ceci est le début de la description du livre 1.',
        },
        {
          title: 'Titre du Livre 2',
          author: 'Auteur 2',
          publicationDate: '2022-02-15',
          description: 'Ceci est le début de la description du livre 2.',
        },
        {
          title: 'Titre du Livre 3',
          author: 'Auteur 3',
          publicationDate: '2022-02-15',
          description: 'Dans un monde où la technologie et la magie se rencontrent, suivez l épopée captivante d un jeune prodige, héritier d un pouvoir ancien. Entre alliances fragiles et trahisons inattendues, l aventure dévoile des secrets enfouis depuis des siècles, mettant en péril l équilibre fragile entre les royaumes.',
        },
        // Ajoutez d'autres livres selon vos besoins
      ] as Book[], // Assurez-vous de spécifier le type Book pour le tableau books
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
});
  
interface Book {
  title: string;
  author: string;
  publicationDate: string;
  description: string;
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
