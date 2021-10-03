import React from 'react';
import ListItem from './ListItem';
import { v4 as uuid } from 'uuid';

class List extends React.Component {
    render() {
        const { children } = this.props;
        const list = children.map(child => {
            return <ListItem key={ uuid() } data={child}/>
        })
        return <ul> { list }</ul>
    }
}

export default List;