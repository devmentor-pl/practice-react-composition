import React from 'react';
import ReactDOM from 'react-dom';


export default class Product extends React.Component {
    
    render() {
        const {d, btn, func, id} = this.props;

        const insertButton = () => {
            if (btn === "cart") {
                return (
                    <button onClick={func}>Usuń z koszyka</button>
                )
            }
            if (btn === "category") {
                return (
                    <button class={`cl` + d.id} onClick={func}>Dodaj do koszyka</button>
                )
            }
            return
        }
        return (
            <li id={d.id} key={id}>{d.name}, {d.price}
            { insertButton() }
            </li>
        )
    }
}
//dlaczego nmie moge tu przypisac zadnego key?