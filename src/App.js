import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './cartContext/CartContext'
// import counter from './count'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  componentDidMount() {
    const storedCartItems = localStorage.getItem('cartItems')

    this.setState({cartList: JSON.parse(storedCartItems)})
  }

  componentDidUpdate() {
    const {cartList} = this.state
    localStorage.setItem('cartItems', JSON.stringify(cartList))
  }

  onAddCartList = product => {
    this.setState(prevState => ({
      cartList: [...prevState.cartList, product],
    }))
  }

  DeleteCartList = () => {}

  render() {
    const {cartList} = this.state
    // console.log(`app ${cartList}`)
    // localStorage.setItem('cart', JSON.stringify(cartList))

    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            onAddCartList: this.onAddCartList,
            DeleteCartList: this.DeleteCartList,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            {/* <Route exact path="/count" component={counter} /> */}
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
