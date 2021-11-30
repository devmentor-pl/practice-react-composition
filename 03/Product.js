import React from 'react';
import Button from './Button';

export default class Product extends React.Component {
    render() {
        const { product: { name, price } } = this.props;
        return (
            <li>
                <header>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </header>
                <footer>
                    <Button data={this.props} />
                </footer>
            </li>
        );
    };
};