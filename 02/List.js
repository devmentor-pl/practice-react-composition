import React from 'react';
import { v4 as uuid } from 'uuid';
import ListItem from './ListItem';

function List(props) {
	const { items } = props;

	const list = items.map((item) => {
		return (
			<ListItem
				key={uuid()}
				name={item}
			/>
		);
	});

	return <ul>{list}</ul>;
}

export default List;
