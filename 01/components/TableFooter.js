import React from "react";

class TableFooter extends React.Component {
    render() {
        return (
            <tfoot>
                <tr>
                    <td colSpan="3">Kwota do zapłaty za wszystkie produkty</td>
                    <td>{this.props.total}</td>
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter