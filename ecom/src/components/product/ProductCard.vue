<template>
  <div class="product-card">
    <a href="#" @click="$emit('toProduct')">
      <img class="product-card-image mx-auto p-8 rounded-t-lg" :src="product?.image" alt="" />
    </a>
    <div class="px-5 pb-5">
      <a href="#" @click="$emit('toProduct')">
        <h5 class="product-card-title">{{ product?.title }}</h5>
      </a>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product?.price }}</span>
        <AddToCart @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AddToCart from '@/components/shared/AddToCart.vue'
import { type PropType, inject } from 'vue'
import type { ProductType } from '@/types'
import useCartStore from '@/stores/cart'

const props = defineProps({
  product: Object as PropType<ProductType>
})

const { addProductToCart } = useCartStore()

const showAlertMessage: any = inject('showAlertMessage')

const addToCart = () => {
  addProductToCart(props.product as ProductType)
  showAlertMessage('product.addToCartMessage')
}
</script>

<style lang="scss" scoped>
.product-card {
  @apply w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700;

  &-title {
    @apply text-xl font-semibold tracking-tight text-gray-900 dark:text-white;
    height: 140px;
  }

  &-image {
    height: 200px;
  }
}
</style>
