import React from 'react';
import Box from './Box';

function Cart(props) {
	const { children } = props;

	return <Box title='Cart'>{children}</Box>;
}

export default Cart;
