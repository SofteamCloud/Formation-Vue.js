<script setup lang="ts">
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'

import Navbar from '@/components/header/Navbar.vue'
import Alert from '@/components/shared/Alert.vue'

import { type AlertMessageType } from '@/types'

const showMessage = ref(false)
const alertMessage = ref({ message: '', type: '' } as AlertMessageType)

const showAlertMessage = (message: string, type: string = ''): void => {
  // Set alert message value.
  showMessage.value = true
  alertMessage.value.message = message
  alertMessage.value.type = type

  // Set Timer to hide alert message.
  setTimeout(() => {
    showMessage.value = false
  }, 5000)
}

provide('showAlertMessage', showAlertMessage)
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="container mx-auto mt-20">
    <Alert v-if="showMessage" :message="alertMessage.message" :class="alertMessage.type" />
    <RouterView />
  </main>
</template>
