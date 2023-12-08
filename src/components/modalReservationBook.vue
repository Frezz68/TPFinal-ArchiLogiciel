<template>
    <div class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>Réservation de livre</h2>
        <div>
          <p><strong>Titre:</strong> {{ title }}</p>
          <p><strong>Auteur:</strong> {{ author }}</p>
          <p><strong>Date de publication:</strong> {{ publicationDate }}</p>
        </div>
        <div>
          <label for="startDate">Date de début:</label>
          <input type="date" id="startDate" v-model="dateDebutReservation" />
        </div>
        <div>
          <label for="endDate">Date de fin:</label>
          <input type="date" id="endDate" v-model="dateFinReservation" />
        </div>
        <button @click="reserveBook">Réserver</button>
        <button @click="closeModal">Fermer</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  
  export default {
    props: {
        id: Number,
        title: String,
        author: String,
        publicationDate: String,
        description: String,
    },
    emits: ['close', 'reserve'],
    setup(props, { emit }) {
        const dateDebutReservation = ref('');
        const dateFinReservation = ref('');

        const closeModal = () => {
            emit('close');
        };

        const reserveBook = () => {
            if ( dateDebutReservation && dateFinReservation ) {
                emit('reserve', {
                    dateDebutReservation: dateDebutReservation.value,
                    dateFinReservation: dateFinReservation.value,
                    idBook: props.id
                });
                closeModal();
            } else {
                alert('Veuillez sélectionner des dates valides.');
            }
        };
        return {
            closeModal,
            reserveBook,
            dateDebutReservation,
            dateFinReservation,
        };
    },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fond semi-transparent pour obscurcir le reste de la page */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Assure que la modal est au-dessus du reste du contenu */

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 2000; /* Assure que le contenu de la modal est au-dessus du fond semi-transparent */
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }

  button {
    padding: 8px 16px;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
