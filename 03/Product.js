import React from 'react';

function Product(props) {
	const { isCategory, isCart, item, handleClick } = props;

	return (
		<li style={{ display: 'flex', gap: '10px' }}>
			<h3>{item.name}</h3>
			<p>{item.price}</p>

			{isCategory ? (
				<button disabled={isCart} onClick={() => handleClick(item)}>
					{isCart ? 'Usuń' : 'Dodaj do koszyka'}
				</button>
			) : (
				<button disabled={!isCart} onClick={() => handleClick(item)}>
					{isCart ? 'Usuń' : 'Dodaj do koszyka'}
				</button>
			)}
		</li>
	);
}

export default Product;
