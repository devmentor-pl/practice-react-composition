import React from 'react'
import ReactDOM from 'react-dom'

import Category from './Category'
import Cart from './Cart'

import data from './data.json'
import Product from './Product'

class App extends React.Component {
  state = {
    cart: []
  }

  addToCart (product) {
    const { cart } = this.state
    const exists = cart.find(nextProduct => nextProduct.id === product.id)
    if (exists) return

    this.setState(prevState => {
      return { cart: [...prevState.cart, { ...product }] }
    })
  }

  removeFromCart (product) {
    const { cart } = this.state
    const filteredProducts = cart.filter(cartProduct => cartProduct.id !== product.id)
    this.setState(() => {
      return { cart: [...filteredProducts] }
    })
  }

  render () {
    const { cart } = this.state
    return (
        <section>
            <Category>
                {data.map((product, index) => <Product key={index} product={product} addProduct={(product) => this.addToCart(product)} deleteProduct={(product) => this.removeFromCart(product)} isCart={false} />)}
            </Category>
            <Cart>
                {cart.map((product, index) => <Product key={index} product={product} addProduct={(product) => this.addToCart(product)} deleteProduct={(product) => this.removeFromCart(product)} isCart={true} />)}
            </Cart>
        </section>
    )
  }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
