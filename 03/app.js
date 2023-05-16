import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";
import Product from "./Product";
import data from "./data.json";

class App extends React.Component {
	state = {
		cart: [],
	};

	addToCart = id => {
		console.log(id);

		// const product = data.find(item => item.id === id);

		// console.log(product);
	};

	// const { item, inCart, wasClicked, removeFromCart, addToCart } = props

	render() {
		const listInCategory = data.map(item => {
			return (
				<Product
					key={item.id}
					item={item}
					wasClicked={false}
					add={this.addToCart(item.id)}
				/>
			);
		});

		return (
			<section>
				<Category productsToBuy={listInCategory} />
				<Cart />
			</section>
		);
	}
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
