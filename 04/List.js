import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        const { items } = this.props
        const listItems = items.map(item => <ListItem key={item.id} name={item.name} text={item.text} size={item.size} />)
        return (
            <>
                <h1>Lista plików</h1>
                <ul>
                    {listItems}
                </ul>
            </>
        )
    }
}

export default List;