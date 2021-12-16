import React from "react";

class TableRow extends React.Component {
    render() {
        const { name, price, qt } = this.props;

        return (
            <tr>
                <td>{name}</td>
                <td>{qt}</td>
                <td>{price * qt}</td>
            </tr>
        );
    }
}

export default TableRow;
