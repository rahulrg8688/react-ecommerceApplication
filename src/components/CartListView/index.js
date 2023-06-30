import CartItem from '../CartItem'
import CartContext from '../../cartContext/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const saveButton = () => {
        localStorage.setItem('butt', JSON.stringify(cartList))
      }

      return (
        <ul className="cart-list">
          <button type="button" onClick={saveButton}>
            save
          </button>
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
