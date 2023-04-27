import React from 'react';
import Product from './Product';

function Cart(props) {
	const { data, onClick } = props;

	const list = data.map((item) => {
		return (
			<Product
				isCart={true}
				key={item.id}
				item={item}
				onClick={() => onClick(item)}
			/>
		);
	});

	return (
		<React.Fragment>
			<h2>Cart</h2>
			<ul>{list}</ul>
		</React.Fragment>
	);
}

export default Cart;
