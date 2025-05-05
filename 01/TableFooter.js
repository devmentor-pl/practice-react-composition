import React from "react";

const TableFooter = props => {

    const {totalPrice} = props;

    return (
        <tfoot>
            <tr>
                <td>TOTAL PRICE: {totalPrice}</td>
            </tr>
        </tfoot>
    )
}

export default TableFooter;