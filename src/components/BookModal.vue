<template>
  <div class="modal-backdrop" v-if="isVisible">
    <div class="modal">
      <h2>Ajouter un livre</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Titre:</label>
          <input type="text" id="title" v-model="book.title">
        </div>
        <div>
          <label for="author">Auteur:</label>
          <input type="text" id="author" v-model="book.author">
        </div>
        <div>
          <label for="genre">Genre :</label>
          <input type="string" id="genre" v-model="book.genre">
        </div>
        <div>
          <label for="availableCopies">Nombre de livre :</label>
          <textarea id="availableCopies" v-model="book.availableCopies"></textarea>
        </div>
        <button type="submit">Ajouter</button>
        <button type="button" @click="closeModal">Annuler</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isVisible: false,
      book: {
        title: '',
        author: '',
        genre: '',
        availableCopies: 0
      }
    };
  },
  methods: {
    submitForm() {
      this.$emit('add-book', this.book);
      this.closeModal();
    },
    closeModal() {
      this.isVisible = false;
    },
    openModal() {
      this.isVisible = true;
    }
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
