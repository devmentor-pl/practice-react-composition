import React from 'react';
import Box from './Box';

function Category(props) {
	const { children } = props;

	return <Box title='Category'>{children}</Box>;
}

export default Category;
