import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useJuegosStore = defineStore('juegos', () => {
  const juegos = ref([])

  async function fetchJuegos() {
    try {
      const url = '/api/juegos.json'
      const { data } = await axios.get(url)
      juegos.value = data
    } catch (error) {
      alert('Error al encontrar juegos.')
      console.error(error)
    }
  }
  function incrementar(index) {
    juegos.value[index].stock++
  }

  function decrementar(index) {
    juegos.value[index].stock--
  }

  return { juegos, fetchJuegos, incrementar, decrementar }
})
