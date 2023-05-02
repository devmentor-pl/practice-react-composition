import React from 'react';

class List extends React.Component {
	render() {
		const { data } = this.props;

		const list = data.map((item) => {
			return (
				<li key={item.id}>
					<p>Nazwa: {item.name}</p>
					<p>Rozmiar: {item.size}B</p>
					<p>Treść: {item.content}</p>
				</li>
			);
		});

		return <ul>{list}</ul>;
	}
}

export default List;
