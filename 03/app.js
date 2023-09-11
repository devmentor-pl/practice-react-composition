import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
	state = {
		cart: [],
	};
	handleAddToCart = elem => {
		this.setState(prevState => ({
			cart: [...prevState.cart, elem],
		}));
	};

	render() {
		const { cart } = this.state;
		return (
			<section>
				<Category onAddToCart={this.handleAddToCart} items={data} />
				<Cart items={cart} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
