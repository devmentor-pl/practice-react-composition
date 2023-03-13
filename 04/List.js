import React from 'react';
import { v4 as uuid } from 'uuid';

class List extends React.Component {
	render() {
		const { files } = this.props;
		const newFiles = files.map(({ name, size, content }) => (
			<li key={uuid()}>
				<p>Nazwa pliku: {name}</p>
				<p>Rozmiar pliku: {size} B</p>
				<p>Zawartość pliku: {content}</p>
			</li>
		));
		return (
			<ul>
				<h2>Lista plików:</h2>
				{newFiles}
			</ul>
		);
	}
}

export default List;
