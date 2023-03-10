import React from 'react';

function Product(props) {
	const { isCategory, item, handleClick } = props;

	return (
		<li style={{ display: 'flex', gap: '10px' }}>
			<h3>{item.name}</h3>
			<p>{item.price}</p>
			<button disabled={!isCategory} onClick={() => handleClick(item)}>
				{isCategory ? 'Dodaj do koszyka' : 'Usuń'}
			</button>
		</li>
	);
}

export default Product;
