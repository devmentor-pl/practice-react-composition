import React from 'react';

class Product extends React.Component {
	state = {
		// isCategory: false,
		// isCart: false,
	};

	render() {
		const { list } = this.props;
		return <ul>{list}</ul>;
	}
}
export default Product;
