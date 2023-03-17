import React from 'react';

class List extends React.Component {
	render() {
		const { files } = this.props;
		const newFiles = files.map(({ name, size, content, id }) => (
			<li key={id}>
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
