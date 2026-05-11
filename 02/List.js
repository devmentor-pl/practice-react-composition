import React from 'react';

import ListItem from './ListItem';

const List = ({ items }) => {
	return (
		<ul>
			{items.map((item, index) => (
				<ListItem key={index} name={item} />
			))}
		</ul>
	);
};

export default List;
