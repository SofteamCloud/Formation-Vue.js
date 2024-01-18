<template>
  <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
    <h2 class="product-title">{{ product?.title }}</h2>

    <div class="flex justify-between m-5">
      <img class="product-image" :src="product?.image" alt="image description" />
      <div class="product-side p-10">
        <div class="flex justify-between mb-3">
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ product?.price }}$</p>
          <AddToCart @add-to-cart="addToCart" />
        </div>
        <hr />
        <p class="product-description">{{ product?.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AddToCart from '@/components/shared/AddToCart.vue'
import type { PropType } from 'vue'
import type { ProductType } from '@/types'
import useCartStore from '@/stores/cart'

const props = defineProps({
  product: Object as PropType<ProductType>
})

const { addProductToCart } = useCartStore()
const addToCart = () => {
  addProductToCart(props.product as ProductType)
}
</script>

<style lang="scss" scoped>
.product {
  &-title {
    @apply mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white;
  }

  &-image {
    @apply h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 p-10;
    height: auto;
    width: 350px;
  }

  &-description {
    @apply mb-3 mt-3 text-gray-500 dark:text-gray-400;
  }
}
</style>
