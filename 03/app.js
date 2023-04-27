import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
	state = {
		cart: [],
	};

	addProductToCart = (item) => {
		this.setState({
			cart: [...this.state.cart, item],
		});
	};

	removeProductFromCart = (item) => {
		const newCart = this.state.cart.filter((el) => el.id !== item.id);
		this.setState({ cart: newCart });
	};

	render() {
		return (
			<section>
				<Category
					data={data}
					onClick={this.addProductToCart}
				/>
				<Cart
					onClick={this.removeProductFromCart}
					data={this.state.cart}
				/>
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
