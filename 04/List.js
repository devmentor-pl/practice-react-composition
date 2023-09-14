import React from 'react';

class List extends React.Component {
	render() {
		const { text } = this.props;
		console.log(text);
		const list = text.map(t => {
			return <li key={t.id}>{t.content}</li>;
		});
		return <ul>{list}</ul>;
	}
}

export default List;
