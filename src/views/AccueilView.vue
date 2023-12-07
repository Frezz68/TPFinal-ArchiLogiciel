<!-- BookPage.vue -->

<template>
  <Navbar/>
  <div>
    <h1>Liste des Livres</h1>
    <div class="book-container">
      <BookComponent
        v-for="(book, index) in this.books"
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
import Navbar from '../components/navbar.vue';

export default defineComponent({
  components: {
    BookComponent,
    Navbar
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
    };
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
.book-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>