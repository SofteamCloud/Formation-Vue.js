export interface ProductType {
  id: number
  title: string
  description: string
  image: string
  price: number
}

export interface CartProductType extends ProductType {
  qty: number
}

export interface CartType {
  products: CartProductType[]
  total: number
}

export interface AlertMessageType {
  message: string
  type: string
}
