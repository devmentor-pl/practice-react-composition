import React from 'react';

export default class TableRow extends React.Component {
    render() {
        const {name, price, quantity} = this.props.product;
        const style={backgroundColor:'orange', textAlign: 'center'};
    
        return (
            <tr>
                <td style = {style}>{name}</td>
                <td style = {style}>{price}</td>
                <td style = {style}>{quantity}</td>
                <td style = {style}>{price*quantity}</td>
            </tr>
        )
    }
}
