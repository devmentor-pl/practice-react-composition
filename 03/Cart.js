import React from "react";

function Cart(props) {
	const { productsInCart } = props;
	return (
		<>
			<h2>Cart</h2>
			<ul>{productsInCart}</ul>
		</>
	);
}

export default Cart;
