<script setup lang="ts">
import IconCartPlus from '@/components/icons/IconCartPlus.vue'

defineEmits(['addToCart'])
</script>

<template>
  <a
    href="#"
    @click.prevent="$emit('addToCart')"
    class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <IconCartPlus class="fill-white" />
  </a>
</template>
