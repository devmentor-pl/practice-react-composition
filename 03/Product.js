import React from 'react';

export default class Product extends React.Component {
	render() {
		const { item, onClick, isCategory, isCart } = this.props;

		if (isCategory) {
			return (
				<li>
					{item.name} Cena: {item.price}zł
					<button
						disabled={false}
						onClick={onClick}>
						Dodaj do koszyka
					</button>
				</li>
			);
		}

		if (isCart) {
			return (
				<li>
					{item.name} Cena: {item.price}zł
					<button
						disabled={false}
						onClick={onClick}>
						Usuń z koszyka
					</button>
				</li>
			);
		}
	}
}
