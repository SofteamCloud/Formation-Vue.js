<template>
  <div>
    <button class="btn btn-green">{{ title }}</button>
  </div>
</template>
<script setup>
defineProps({
  title: String
});
</script>
<style>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}

.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>