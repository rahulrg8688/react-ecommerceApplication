import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  onAddCartList: () => {},
  DeleteCartList: () => {},
})

export default CartContext
