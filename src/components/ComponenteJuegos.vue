<script>
import { mapStores } from 'pinia'
import { useJuegosStore } from '@/stores/tareas'

export default {
  computed: {
    ...mapStores(useJuegosStore)
  },
  created() {
    this.juegosStore.fetchJuegos()

    console.log(this.juegosStore.juegos)
  },
  methods: {
    incrementar(index) {
      this.juegosStore.incrementar(index)
    },
    decrementar(index) {
      this.juegosStore.decrementar(index)
    }
  }
}
</script>

<template>
  <div>
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, index) in juegosStore.juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ juego.precio }}</td>
          <td>
            <button @click="incrementar(index)">+</button>
            <button @click="decrementar(index)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  width: 100%;
  color: #283c50;
  font-size: 20px;
  font-weight: 500;
}

th,
td {
  border: 1px solid #000;
  text-align: center;
}

h1,
h2 {
  text-align: center;
  color: #283c50;
}
</style>
