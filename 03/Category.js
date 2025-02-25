import React from 'react';
import Product from './Product';

class Category extends React.Component {
	render() {
		const { products, onAddToCart } = this.props;

		return (
			<div>
				<h2>Products</h2>
				{products.map(product => (
					<Product key={product.id} product={product} isCart={false} handleClick={onAddToCart} />
				))}
			</div>
		);
	}
}

export default Category;
