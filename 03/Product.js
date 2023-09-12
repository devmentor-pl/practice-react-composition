import React from 'react';

class Product extends React.Component {
	state = {
		isDisable: false,
	};

	handleToggleDisable = () => {
		const { isDisable } = this.state;
		this.setState(prevState => ({ isDisable: !isDisable }));
	};
	render() {
		const { product, isCategory, isCart, onAddToCart, onRemoveFromCart } = this.props;
		return (
			<div className='product'>
				<h3>{product.name}</h3>
				<p>{product.description}</p>
				<p>Price: ${product.price}</p>

				{isCategory && (
					<button
						onClick={() => {
							onAddToCart(product);
							this.handleToggleDisable();
						}}
						disabled={this.state.isDisable}
					>
						+
					</button>
				)}

				{isCart && (
					<button
						onClick={() => {
							onRemoveFromCart(product);
							console.log('button', this.state);
							this.handleToggleDisable();
						}}
					>
						-
					</button>
				)}
			</div>
		);
	}
}
export default Product;
