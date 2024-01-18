<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="alert" role="alert">
    {{ $t(message) }}
  </div>
</template>

<style lang="scss">
.alert {
  @apply p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400;

  &-error {
    @apply text-red-800 bg-red-50 dark:text-red-400;
  }
}
</style>
