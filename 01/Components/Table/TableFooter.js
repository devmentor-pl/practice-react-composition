import React from "react";

class TableFooter extends React.Component{
    render() {
        const { basketPrice } = this.props;
        const price = basketPrice.reduce((acc, item) => { return acc + item }, 0);
        return (
            <tfoot>
                <tr>
                    <td>{price}</td>
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter;