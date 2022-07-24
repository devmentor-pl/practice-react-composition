import React from "react";

class TableRow extends React.Component{
    render() {
        const { id, name, price, quantity, totalPrice } = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{totalPrice}</td>
            </tr>
        )
    }
}

export default TableRow;