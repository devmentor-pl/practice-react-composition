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
		const product = data.find(item => item.id === id);
		this.setState({ cart: [...this.state.cart, product] });
	};

	checkIfInCart = id => {
		const product = this.state.cart.find(item => item.id === id);

		if (this.state.cart.includes(product)) {
			return true;
		}
		return false;
	};

	removeFromCart = id => {
		const products = this.state.cart.find(item => item.id === id);
		this.setState({
			cart: [products],
		});
	};

	render() {
		const listInCategory = data.map(item => {
			return (
				<Product
					key={item.id}
					item={item}
					wasClicked={this.checkIfInCart(item.id)}
					add={() => this.addToCart(item.id)}
				/>
			);
		});

		const listInCart = this.state.cart.map(item => {
			return (
				<Product
					key={item.id}
					item={item}
					remove={() => this.removeFromCart(item.id)}
				/>
			);
		});

		return (
			<section>
				<Category productsToBuy={listInCategory} />
				<Cart productsInCart={listInCart} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
