import React from 'react';

export default class TableRow extends React.Component {
    render() {
        const { name, price, quantity } = this.props.data;
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{price * quantity}</td>
            </tr>
        );
    };
};