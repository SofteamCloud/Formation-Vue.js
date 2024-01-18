<script setup lang="ts">
import type { CartProductType } from '@/types'

defineProps({
  products: Array<CartProductType>
})

defineEmits(['removeFromCart'])
</script>

<template>
  <div class="cart-products">
    <table class="cart-products-list">
      <thead class="cart-products-list-header">
        <tr>
          <th scope="col" class="px-6 py-3">
            {{ $t('product.name') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('product.price') }}
          </th>

          <th scope="col" class="px-6 py-3">
            {{ $t('product.qty') }}
          </th>

          <th scope="col" class="px-6 py-3">
            {{ $t('product.total') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('actions.actions') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="cart-products-list-line" v-for="product in products" :ref="product.title">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ product.title }}
          </th>
          <td class="px-6 py-4">{{ product.price }}$</td>
          <td class="px-6 py-4">
            {{ product.qty }}
          </td>

          <td class="px-6 py-4">{{ product.price * product.qty }}$</td>
          <td class="px-6 py-4">
            <a
              @click.prevent="$emit('removeFromCart', product.id)"
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Remove</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  &-products {
    @apply relative overflow-x-auto shadow-md sm:rounded-lg;

    &-list {
      @apply w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400;

      &-header {
        @apply text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
      }

      &-line {
        @apply bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600;
      }
    }
  }
}
</style>
