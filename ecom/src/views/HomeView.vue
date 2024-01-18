<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ProductCard from '../components/product/ProductCard.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
const { getProducts } = storeToRefs(productStore)
</script>

<template>
  <div class="grid gap-4 grid-cols-3 p-5">
    <ProductCard
      class="flex-1"
      v-for="product in getProducts"
      :ref="product.title"
      :product="product"
      @to-product="$router.push('/product/' + product.id)"
    />
  </div>
</template>
