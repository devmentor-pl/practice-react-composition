import React from "react";

class TableFooter extends React.Component {
    render() {
        const { prices } = this.props;
        const sum = prices.reduce((a, b) => a + b, 0);
        return (
            <tr>
                <td>Suma do zaplaty:</td>
                <td></td>
                <td style={{ border: "1px solid red" }}>{sum}</td>
            </tr>
        );
    }
}

export default TableFooter;
