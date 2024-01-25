<script setup>
import Todos from './components/Todos.vue'
import AError from './components/atoms/AError.vue';
</script>

<template>
  <header class="max-w-sm mx-auto">
    <h1 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Todo List app</h1>
  </header>
  <main>
    <AError />
    <Todos />
  </main>
</template>
