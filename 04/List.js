import React from 'react';

class List extends React.Component {
    render() {
        const {data} = this.props;
        const list = data.map(item => {
            return (
                <li key={item.id}>
                    <h4>Nazwa pliku: {item.name}</h4>
                    <p>Rozmiar pliku: {item.size}</p>
                    <p>Zawartość pliku: {item.text}</p>
                </li>
            )
        });
        return <ul>{list}</ul>
    }
}

export default List;