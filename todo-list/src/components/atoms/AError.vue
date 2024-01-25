<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue';

const message = ref('');

onErrorCaptured((err) => {
  console.dir(err)
  message.value = 'An error occurred: ' + err.message;
  return false;
});
</script>
