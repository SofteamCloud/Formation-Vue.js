<template>
  <div class="todos max-w-sm mx-auto bg-white rounded-xl shadow-md">
    <div class="todo-form p-6">
      <AInput class="mb-5" :value="todoItem" @update:value="updateTodoItem" />
      <AButton title="Ajouter une tâche" @click="addTodoItem" />
    </div>

    <div class="todos-list p-6">
      <OTodosTable v-if='getTodos?.length > 0' :rows="getTodos" @remove-todo-item="removeTodoItem" />
      <div v-else>Merci d'ajouter des nouvelles tâches</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodos } from '@/stores/todos'
import AButton from '@/components/atoms/AButton.vue'
import AInput from '@/components/atoms/AInput.vue'
import OTodosTable from '@/components/organisms/OTodosTable.vue'

const todosStore = useTodos()
// Extract properties from store, helper to keep reactivity. 
const { getTodos } = storeToRefs(todosStore)
const todoItem = ref('')

// Function to add todo item to store.
const addTodoItem = () => {
  if (todoItem.value) {
    todosStore.addTodo(todoItem.value)
    todoItem.value = ''
  }
}

// Function to remove todo item from store.
const removeTodoItem = (value) => {
  todosStore.removeTodo(value)
}

// Function to update current todo item coming from the input.
const updateTodoItem = (value) => {
  todoItem.value = value
}
</script>

<style>
.todos-list-content:after {
  content: none;
}
</style>