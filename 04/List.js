import React from 'react';

class List extends React.Component {
    render() {
        const { items } = this.props

        return (
            <ul>
                {items.map(({id, name, size, content}) => 
                    (
                        <li key={id}>
                            <h3>{name} ({size})</h3>
                            <p>{content}</p>
                        </li>
                    )                    
                )}    
            </ul>
        )
    }
}

export default List;