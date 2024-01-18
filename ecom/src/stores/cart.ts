import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import storage from '@/helpers/local-storage'

import type { ProductType, CartProductType, CartType } from '@/types'

const STORE_NAME = 'cart'
const useCartStore = defineStore(STORE_NAME, () => {
  const cart = ref({
    products: [],
    total: 0
  } as CartType)

  const getCart = computed(() => cart.value)

  const addProductToCart = (product: ProductType): void => {
    let index = cart.value.products.findIndex((item) => product.id === item.id)
    if (index !== -1) {
      cart.value.products[index].qty += 1
      cart.value.total += product.price
    } else {
      const item: CartProductType = { ...product, qty: 1 }
      cart.value.products.push(item)
      cart.value.total += product.price
    }
    updateStorage()
  }

  const removeProductFromCart = (id: number): void => {
    cart.value.products = cart.value.products.filter((item: CartProductType) => {
      if (item.id === id) {
        cart.value.total -= item.price * item.qty
      } else {
        return item
      }
    })
    updateStorage()
  }

  const updateStorage = () => {
    storage.setItem(STORE_NAME, cart.value)
  }

  const getStorage = (): CartType => {
    return storage.getItem(STORE_NAME)
  }

  const getProductsNumber = computed(() => {
    return cart.value.products.length
  })

  const storageCart = getStorage()
  if (storageCart !== null) {
    cart.value = storageCart
  }

  return { getCart, addProductToCart, removeProductFromCart, getProductsNumber }
})

export default useCartStore
