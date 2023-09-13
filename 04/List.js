import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class List extends React.Component {
	render() {
		const { text } = this.props;
		const list = text.map(t => {
			return <li key={uuidv4}>{t}</li>;
		});
		return <ul>{list}</ul>;
	}
}

export default List;
