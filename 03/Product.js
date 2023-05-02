import React from 'react';

export default class Product extends React.Component {
	render() {
		const { item, onClick, isCategory } = this.props;

		return (
			<li>
				{item.name} Cena: {item.price}zł
				<button
					disabled={false}
					onClick={onClick}>
					{isCategory ? 'dodaj do koszyka' : 'usuń z koszyka'}
				</button>
			</li>
		);
	}
}
