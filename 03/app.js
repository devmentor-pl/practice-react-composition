import React from 'react'
import { createRoot } from 'react-dom/client'

import Category from './Category'
import Cart from './Cart'

import data from './data.json'

class App extends React.Component {
	state = {
		cart: [],

	}

	addToBasket = item => {
		const newItem = { ...item, inBasket: true }

		this.setState(
			prevState => {
				return {
					cart: [...prevState.cart, newItem],
				}
			},
			() => {
				console.log(this.state.cart)
			}
		)
	}

	removeFromBasket = item => {
		const currenCart = this.state.cart.filter(user => user !== item)

		this.setState({
			cart: currenCart,
		})
	}

	render() {
		const { cart } = this.state
		return (
			<section>
				<Category data={data} add={this.addToBasket} />
				<Cart data={cart} remove={this.removeFromBasket} />
			</section>
		)
	}
}

const root = createRoot(document.querySelector('#root'))
root.render(<App />)