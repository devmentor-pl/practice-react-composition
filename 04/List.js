import React from 'react';

class List extends React.Component {
    render() {
        const { items } = this.props;
        console.log(items)
        const list = items.map((el) => {
            return (
                <li key={el.id}>
                    <h3>Dane: {el.text}</h3>
                    <p>Rozmiar pliku: {el.size} Bytes</p>
                </li>
            )
        })
        return (
            <ul>
                Lista plików
                {list}
            </ul>
        )
    }
}

export default List;