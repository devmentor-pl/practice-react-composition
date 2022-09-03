import React from 'react';

class List extends React.Component {
    render() {
        const {items} = this.props
        return <ul>
            {items.map(item => {
                return (
                    <li key={item.id}>{`Name: ${item.name}, Size: ${item.size}, Content: ${item.content}`}</li>
                )
            })}
        </ul>
    }
}

export default List;