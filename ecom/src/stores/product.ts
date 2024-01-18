import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import storage from '@/helpers/local-storage'

import type { ProductType } from '@/types'

const STORE_NAME = 'product'

export const useProductStore = defineStore(STORE_NAME, () => {
  const products = ref([] as ProductType[])
  const currentProduct = ref({} as ProductType)

  const getProducts = computed(() => products.value)

  const getProduct = (id: number) => {
    if (products.value.length === 0) {
      initProducts()
    }
    currentProduct.value =
      getProducts.value.find((item: ProductType) => {
        console.log(item.id, id)
        return item.id === Number(id)
      }) || ({} as ProductType)
  }

  const initProducts = () => {
    const storageProducts = storage.getItem(STORE_NAME)
    if (storageProducts !== null && storageProducts.length > 0) {
      products.value = storageProducts
    } else {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          products.value = data
          storage.setItem(STORE_NAME, data)
        })
    }
  }

  initProducts()

  return { getProducts, currentProduct, getProduct }
})
