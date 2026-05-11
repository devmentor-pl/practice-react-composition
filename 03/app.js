import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
	state = {
		cart: [],
	};

	addToCart = productName => {
		const item = data.find(el => el.name === productName);

		this.setState(prev => ({
			cart: [...prev.cart, item],
		}));
	};

	removeFromCart = productName => {
		this.setState(prev => ({
			cart: [...prev.cart].filter(el => el.name !== productName),
		}));
	};

	isInCart = productName => {
		return this.state.cart.some(el => el.name === productName);
	};

	render() {
		return (
			<section>
				<h1>Sklep</h1>
				<Category data={data} isCategory={true} onAddToCart={this.addToCart} isInCart={this.isInCart} />
				<Cart cart={this.state.cart} isCart={true} onRemoveFromCart={this.removeFromCart} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
