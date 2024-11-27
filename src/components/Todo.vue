<script setup>
import { ref } from 'vue'

let id = 0
const show = ref(true)
const todos = ref([
  {id: id++, text: 'hoge'},
  {id: id++, text:'huwa'},
  {id: id++, text:'piyo'}
])
const newTodo = ref()

function addTodo() {
  todos.value.push({id: id++, text: newTodo.value})
  newTodo.value = ''
}
function toggleTodo() {
  show.value = !show.value
}
function removeTodo(todo) {
  todos.value = todos.value.filter((z) => z !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>add todo</button>
  </form>
  <button @click="toggleTodo">toggle todo list</button>
  <ui v-if="show">
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">delete</button>
    </li>
  </ui>
</template>
