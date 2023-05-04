import React from 'react';
import ListItem from './ListItem';

function List(props) {
	const { items } = props;

	const list = items.map((item) => {
		return (
			<ListItem
				key={item.uuid}
				name={item.name}
			/>
		);
	});

	return <ul>{list}</ul>;
}

export default List;
