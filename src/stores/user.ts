import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const username = ref('');
    const role = ref('');
    const token = ref('');

  return { username, role, token }
})