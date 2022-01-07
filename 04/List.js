import React from 'react';

class List extends React.Component {
    render() {
        const {data} = this.props;
        const dataItem = data.map((item) => {
            return (
                <li key ={item.id}>
                    <p>Nazwa: {item.name}</p>
                    <p>Rozmiar: {item.size}</p>
                    <p>Zawartość: {item.content}</p>
                </li>
                
            )
        } );
        return <ul>{dataItem}</ul>;
    }
}

export default List;