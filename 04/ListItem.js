import React from "react";

class ListItem extends React.Component{
    render(){
        const {name, text,size} = this.props
        return (
            <li>
                <h2>Nazwa pliku: <span>{name}</span></h2>
                <h4>Zawartość pliku: <span>{text}</span></h4>
                <h5>Rozmiar pliku: <span>{size}</span></h5>
            </li>
        )
    }
}

export default ListItem