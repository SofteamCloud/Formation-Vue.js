<script setup lang="ts">
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n';
import useCartStore from '@/stores/cart'
import getPathLang from '@/helpers/locale';

const locale = getPathLang(window.location.pathname)
const { push } = useRouter();
const cartStore = useCartStore()
const { getProductsNumber } = storeToRefs(cartStore)
const updateLocale = () => {
  if (locale === 'fr') {
    window.location.href = '/en' + window.location.pathname
  } else {
    window.location.href = window.location.pathname.replace('/en', '')
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink class="flex items-center space-x-3 rtl:space-x-reverse" to="/">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecom</span>
      </RouterLink>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="navbar-links">
          <li>
            <RouterLink to="/" class="navbar-links-item" aria-current="page">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/cart" class="navbar-links-item">
              Panier
              <span class="navbar-links-item-cart">{{ getProductsNumber }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <button v-if="locale === 'en'" @click="updateLocale">Fr</button>
        <button v-else @click="updateLocale">En</button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  @apply bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600;

  &-links {
    @apply font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700;

    &-item {
      @apply block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent;

      &-cart {
        @apply inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300;
      }
    }
  }
}
</style>
