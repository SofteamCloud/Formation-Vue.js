import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'todos'

export const useTodos = defineStore(STORE_NAME, () => {
  // List of todos.
  const todos = ref([])

  // Return todos list.
  const getTodos = computed(() => todos.value)

  // Add new todo in the top of todos list.
  const addTodo = (item) => todos.value.unshift(item);

  // Remove todo from todos list.
  const removeTodo = (item) => todos.value = todos.value.filter((value) => item !== value)

  return { todos, getTodos, addTodo, removeTodo }
});
