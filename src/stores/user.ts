import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const role = ref('');
    const token = ref('');

  return { role, token }
})