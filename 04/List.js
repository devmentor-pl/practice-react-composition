import React from 'react';

class List extends React.Component {
    render() {
        const {items} = this.props;

        return <ul>{items.map(({name, size, id}) => <li key={id}>{`${name}: ${size}kB`}</li>)
        }</ul>
    }
}

export default List;