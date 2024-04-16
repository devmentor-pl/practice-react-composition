import React from "react";

class TableFooter extends React.Component {
    render() {
        const { data } = this.props;
        const total = data.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        return (
            <tfoot>
                <tr>
                    <td colSpan="3">Suma:</td>
                    <td>{total}</td>
                </tr>
            </tfoot>
        );
    }
}

export default TableFooter;
