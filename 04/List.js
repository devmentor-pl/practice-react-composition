import React from 'react';

class List extends React.Component {
    render() {
        const {items} = this.props;
        return <ul>
            {items.map(({id, name, size})=> <li key = {id}>{name} {(size)}</li>)}
        </ul>
       }
}

export default List;