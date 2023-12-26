import React from "react";

class TableFooter extends React.Component {
    render() {
        const { items } = this.props;
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return (
            <tfoot>
                <tr>
                    <td colSpan="3">Łączna suma</td>
                    <td>{total}</td>
                </tr>
            </tfoot>
        );
    }
}

export default TableFooter;