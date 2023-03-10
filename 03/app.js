import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
	state = {
		cart: [],
	};

	addToCart = (item) => {
		this.setState((state) => {
			return { cart: [...state.cart, item] };
		});
	};

	removeFromCart = (item) => {
		this.setState((state) => {
			const newCart = state.cart.filter((el) => el.id !== item.id);

			return { cart: newCart };
		});
	};

	inCategory = (item) => {
		return !this.state.cart.find((el) => el.id === item.id);
	};

	render() {
		const categoryList = data.map((item) => (
			<Product
				item={item}
				key={item.id}
				isCategory={this.inCategory(item) ? true : false}
				handleClick={
					this.inCategory(item) ? this.addToCart : this.removeFromCart
				}
			/>
		));

		const cartList = this.state.cart.map((item) => (
			<Product
				item={item}
				key={item.id}
				isCart={true}
				handleClick={
					this.inCategory(item) ? this.addToCart : this.removeFromCart
				}
			/>
		));

		return (
			<section>
				<Category>{categoryList}</Category>
				<Cart>{cartList}</Cart>
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
