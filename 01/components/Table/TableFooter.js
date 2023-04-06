import React from "react";

const TableFooter = props => {
    const { data } = props;

    return (
        <tfoot>
            <tr>
                <th colSpan='3'>Total</th>
                <td>{data}</td>
            </tr>
        </tfoot>
    )
}

export default TableFooter;