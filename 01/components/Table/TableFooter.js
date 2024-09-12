import React from "react";

const TableFooter = props => {
    const {sumData} = props;
    const totalizer = sumData.reduce(
        (acc, currValue) => acc + currValue.itemSummary,
        0,
    )
    return (
        <tfoot>
            <tr>
                <td>Total: {totalizer}</td>    
            </tr>
        </tfoot>
    )

}

export default TableFooter;