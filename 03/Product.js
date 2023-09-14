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
		const { product, isCart } = this.props;
		return (
			<div>
				<h3>{product.name}</h3>
				<p>{product.description}</p>
				<p>Price: ${product.price}</p>
				<button
					onClick={() => {
						this.props.handleClick(product);
						this.handleToggleDisable();
					}}
					disabled={this.state.isDisable}
				>
					{isCart ? '-' : '+'}
				</button>
			</div>
		);
	}
}
export default Product;