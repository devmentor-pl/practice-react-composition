import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
	state = {
		cart: [],
	};

	addToCart = product => {
		if (!this.state.cart.includes(product)) {
			this.setState(prevState => ({
				cart: [...prevState.cart, product],
			}));
		}
	};

	removeFromCart = product => {
		this.setState(prevState => ({
			cart: prevState.cart.filter(item => item.id !== product.id),
		}));
	};

	render() {
		return (
			<div className='App'>
				<Category products={data} onAddToCart={this.addToCart} />
				<Cart cartItems={this.state.cart} onRemoveFromCart={this.removeFromCart} />
			</div>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
