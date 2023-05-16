import React from "react";

class Product extends React.Component {
	handleRemoveFromCart(id) {
		const { remove } = this.props;
		remove(id);
	}

	handleAddToCart = id => {
		const { add } = this.props;
		add(id);
	};

	render() {
		const { item, inCart, wasClicked } = this.props;
		return (
			<li>
				{item.name} {item.price} {""}
				{inCart === true ? (
					<button onClick={() => this.handleRemoveFromCart(item.id)}>
						Usuń z koszyka
					</button>
				) : (
					<button
						onClick={() => this.handleAddToCart(item.id)}
						disabled={wasClicked === true ? true : false}>
						Dodaj do koszyka
					</button>
				)}
			</li>
		);
	}
}

export default Product;
