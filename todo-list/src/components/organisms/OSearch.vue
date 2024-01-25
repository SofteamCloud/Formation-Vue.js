<template>
  <div class="todo-form">
    <AInput class="mb-5" id="search" title="Recherche" :value="searchText" @update:value="onUpdateSearch" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['onUpdateSearch'])

const searchText = ref('')

const onUpdateSearch = (value) => {
  searchText.value = value
  emit('onUpdateSearch', searchText.value);
}
</script>
