<template>
  <div class="todos max-w-sm mx-auto bg-white rounded-xl shadow-md">
    <div class="inline-flex rounded-md shadow-sm">

      <AButton class="btn-tab" title="Ajouter une tâche" @click="tab = 'add'" />
      <AButton class="btn-tab" title="Recherche" @click="tab = 'search'" />
    </div>
    <hr>
    <div class="todo-form p-6" v-if="tab === 'add'">
      <AInput class="mb-5" id="tache" title="Ajouter une nouvelle tâche" :value="todoItem"
        @update:value="updateTodoItem" />
      <AButton class="btn btn-green" title="Ajouter une tâche" @click="addTodoItem" :disabled="todoItem.length < 3" />
    </div>

    <OSearch v-else class="todo-form p-6" @on-update-search="onUpdateSearch" />

    <OTodosTable v-if='getTodos?.length > 0' :rows="getTodos" @remove-todo-item="removeTodoItem" />
    <div v-else>Merci d'ajouter des nouvelles tâches</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import debounce from '@/helpers/debounce'

import { useTodos } from '@/stores/todos'
import AButton from '@/components/atoms/AButton.vue'
import OTodosTable from '@/components/organisms/OTodosTable.vue'
import OSearch from './organisms/OSearch.vue'

const todosStore = useTodos()

// Init todos on load.
todosStore.initTodos()

// Extract properties from store, helper to keep reactivity. 
const { getTodos } = storeToRefs(todosStore)

const todoItem = ref('')
const tab = ref('add')


// Function to add todo item to store.
const addTodoItem = async () => {
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

// Function to find to todo items from API.
const findTodoItems = async (value) => {
  if (value && value.length > 3) {
    todosStore.findTodoItems(value)
  }
  if (!value || value.length === 0) {
    todosStore.initTodos()
  }
}

const onUpdateSearch = debounce((value) => findTodoItems(value), 500)
</script>

<style>
.todos-list-content:after {
  content: none;
}
</style>