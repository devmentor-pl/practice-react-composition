import React from "react";

class TableRow extends React.Component {
render() {
    const { name, price, quantity } = this.props

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{quantity * price}</td>
        </tr>
    )
}
}

export default TableRow