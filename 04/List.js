import React from 'react';

class List extends React.Component {
    render() {
        const {items} = this.props
        
        return <ul>
            {items.map(({id, name, content, size}) => {
                return <li key={id}>
                    <h3>nazwa pliku: "{name}"</h3> 
                    <p>zawartość: "{content}"</p>
                    <p>rozmiar: {size} B</p>
                    </li>
            })
            }
        </ul>
    }
}

export default List;