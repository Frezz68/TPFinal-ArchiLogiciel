import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const role = ref('');
    const token = ref('');
    const userId = ref('');

  return { role, token, userId }
})