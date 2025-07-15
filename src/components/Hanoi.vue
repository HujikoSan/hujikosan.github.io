<script setup>
import { ref } from 'vue'

const diskCount = ref(3)
const moves = ref([])

function solve() {
  moves.value = []
  hanoi(diskCount.value, 1, 3, 2)
}

function hanoi(n, from, to, aux) {
  if (n === 0) return
  hanoi(n - 1, from, aux, to)
  moves.value.push(`Move disk ${n} from ${from} to ${to}`)
  hanoi(n - 1, aux, to, from)
}
</script>

<template>
  <div>
    <h1>ハノイの塔</h1>
    <p>
      <label>ディスクの数: <input type="number" v-model.number="diskCount" min="1" /></label>
      <button @click="solve">解く</button>
    </p>
    <ul>
      <li v-for="(move, index) in moves" :key="index">{{ move }}</li>
    </ul>
    <p><router-link to="/">back</router-link></p>
  </div>
</template>

