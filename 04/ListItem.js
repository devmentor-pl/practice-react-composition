import React from 'react';

class ListItem extends React.Component {
	render() {
		const { name, content, size, type } = this.props;
		
		return (
			<li>
				<p>Nazwa pliku: {name}</p>
				<p>Typ pliku: {type}</p>
				<p>Rozmiar pliku: {size}</p>
				<p>Zawartość pliku: {content}</p>
			</li>
		);
	}
}

export { ListItem };
