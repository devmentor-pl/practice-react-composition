import React from "react";

class TableRow extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
            </tr>
        );
    }
}

export default TableRow;