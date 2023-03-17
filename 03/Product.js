import React from 'react';

function Product(props) {
	const { item, handleClick, disabled, text } = props;

	return (
		<li style={{ display: 'flex', gap: '10px' }}>
			<h3>{item.name}</h3>
			<p>{item.price}</p>

			<button disabled={disabled} onClick={() => handleClick(item)}>
				{text}
			</button>
		</li>
	);
}

export default Product;
