<script setup lang="ts">
import { computed, inject } from 'vue'
import { storeToRefs } from 'pinia'

import ProductsList from '@/components/cart/ProductsList.vue'
import useCartStore from '@/stores/cart'

const cartStore = useCartStore()
const { getCart } = storeToRefs(cartStore)

const showAlertMessage: any = inject('showAlertMessage')

const removeProduct = (id: number) => {
  cartStore.removeProductFromCart(id)
  showAlertMessage('product.removeProductFromCart')
}

const total = computed(() => Math.round(getCart.value.total))
</script>

<template>
  <div class="cart">
    <h1 class="text-4xl font-bold dark:text-white mb-10 mt-5">{{ $t('cart.name') }}</h1>
    <h3 class="text-2xl font-bold dark:text-white mb-10 mt-5">
      {{ $t('cart.total') }}: {{ total }}$
    </h3>
    <ProductsList :products="getCart.products" @remove-from-cart="removeProduct" />
  </div>
</template>

<style></style>
