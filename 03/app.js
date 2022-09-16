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

  addToCart = product => {
    const exists = data.find(nextProduct => nextProduct.id === product.id)

    if (exists){
      this.setState(prevState => {
        return { cart: [...prevState.cart, { ...product }] }
      })
    }

  }

  removeFromCart = product => {
    const { cart } = this.state
    const filteredProducts = cart.filter(cartProduct => cartProduct.id !== product.id)
    this.setState(() => {
      return { cart: [...filteredProducts] }
    })
  }

  inCart = product => {
    return !!this.state.cart.find(nextProduct => nextProduct.id === product.id)
  }

  render () {
    const { cart } = this.state
    return (
        <section>
            <Category>
                {data.map((product, index) => <Product key={index} product={product} clickHandler={this.addToCart} buttonValue='ADD' inCart={this.inCart(product)}/>)}
            </Category>
            <Cart>
                {cart.map((product, index) => <Product key={index} product={product} clickHandler={this.removeFromCart} buttonValue='REMOVE' isCart={true} />)}
            </Cart>
        </section>
    )
  }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
