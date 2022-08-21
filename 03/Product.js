import React from 'react';

class Product extends React.Component {
    render() {
        const {name, price, buttonText, onClick, disabled} = this.props;
        return (
            <li>
                <header>
                    <h3>{name}</h3>
                </header>
                <p>{price}</p>
                <button onClick={onClick} disabled={disabled}>{buttonText}</button>
            </li>
        )
    }
}

export default Product;