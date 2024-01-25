import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

import { APISettings } from '../api/config';

const STORE_NAME = 'todos'

export const useTodos = defineStore(STORE_NAME, () => {
  // List of todos.
  const todos = ref([])

  // Return todos list.
  const getTodos = computed(() => todos.value)

  // Retrieve todos from web service.
  const initTodos = async () => {
    try {
      const result = await fetch(APISettings.baseURL + '/todos', {
        method: 'GET',
        headers: APISettings.headers,
        mode: 'cors'
      })
      const res = await result.json()

      if (res.status !== 200) {
        console.error('error')
        throw new Error('Server down!')
      }
      todos.value = res.data;
    } catch (e) {
      throw new Error("Server down")
    }
  }

  // Add new todo in the top of todos list.
  const addTodo = async (item) => {
    const body = {
      id: uuidv4(),
      todo: item
    }
    const result = await fetch(APISettings.baseURL + '/todos', {
      method: 'POST',
      headers: APISettings.headers,
      mode: 'cors',
      body: JSON.stringify(body)
    })
    const res = await result.json()

    if (res.status !== 200) {
      console.error('error')
    } else {
      todos.value.unshift(body);
    }
  }

  // Remove todo from todos list.
  const removeTodo = async (id) => {
    const result = await fetch(APISettings.baseURL + '/todos/' + id, {
      method: 'DELETE',
      headers: APISettings.headers,
      mode: 'cors'
    })

    const res = await result.json()

    if (!res || res.status !== 200) {
      throw new Error('Deleted')
    } else {
      todos.value = todos.value.filter((item) => id !== item.id)
    }
  }

  // Find todo items based on text.
  const findTodoItems = async (q) => {
    const result = await fetch(APISettings.baseURL + '/todos/search', {
      method: 'POST',
      headers: APISettings.headers,
      mode: 'cors',
      body: JSON.stringify({q: q})
    })
    const res = await result.json()

    if (res.status !== 200) {
      console.error('error')
    } else {
      todos.value = res.data;
    }
  }

  return { todos, getTodos, initTodos, addTodo, removeTodo, findTodoItems }
});
