import React from 'react';


class TableRow extends React.Component {
    render() {
        const { data } = this.props;
        const totalPrice = data.price * data.quantity;
        return (
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>{totalPrice}</td>
            </tr>
        )
    }
}

export default TableRow;