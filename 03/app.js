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

	render() {
		const { cart } = this.state;

		const list = data.map(elem => {
			return (
				<li key={elem.id}>
					{elem.name} - {elem.price} PLN
					<button>+</button>
				</li>
			);
		});

		return (
			<section>
				<Category list={list} />
				<Cart items={cart} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
