<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted, computed } from 'vue'

import ProductDetail from '@/components/product/ProductDetail.vue'
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'
const productStore = useProductStore()
const { currentProduct } = storeToRefs(productStore)
const route = useRoute()

const product = computed(() => currentProduct.value)

onMounted(() => {
  const id = route.params.id as unknown as number
  productStore.getProduct(id)
})
</script>

<template>
  <div>
    <ProductDetail class="flex-1" :product="product" />
  </div>
</template>
