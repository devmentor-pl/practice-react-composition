import React from 'react';

class List extends React.Component {
    createListItems() {
        const { items } = this.props
        return items.map(element => {
            console.log(element)
            const { id, name, size, content } = element
            return <li key={id}>Nazwa: {name}, rozmiar: {size} <br></br>
            {content}</li>
        })
    }

    render() {

        return (
            <ul>Lista plików
                {this.createListItems()}
            </ul>)
    }
}

export default List;