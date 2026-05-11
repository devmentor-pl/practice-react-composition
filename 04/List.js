import React from 'react';
import { ListItem } from './ListItem';

class List extends React.Component {
	render() {
		const { list } = this.props;
		
		return (
			<ul>
				{list.map(el => (
					<ListItem key={el.id} name={el.name} content={el.content} size={el.size} type={el.type} />
				))}
			</ul>
		);
	}
}

export default List;
