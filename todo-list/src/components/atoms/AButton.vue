<template>
  <button :disabled="disabled" :class="{ 'cursor-not-allowed': disabled }">{{ title }}</button>
</template>
<script setup>
defineProps({
  title: String,
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>
<style>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}

.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}

.btn-tab {
  @apply px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white;
}
</style>