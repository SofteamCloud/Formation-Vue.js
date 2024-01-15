<template>
  <div>
    <label for="text" class="input-label">
      Ajouter une nouvelle tâche
    </label>
    <input type="text" id="text" class="input" @input="$emit('update:value', $event.target.value)"
      placeholder="Lorem ipsum no..." :value="value" required>
  </div>
</template>

<script setup>
defineProps({
  value: String
})

defineEmits(['update:value'])
</script>

<style>
.input-label {
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}

.input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
</style>