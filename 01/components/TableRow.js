import React from 'react';


class TableRow extends React.Component {
    render() {
        const { row } = this.props;
        const totalPrice = row.price * row.quantity;
        return (
            <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>{row.quantity}</td>
                <td>{totalPrice}</td>
            </tr>
        )
    }
}

export default TableRow;