import React from 'react';

const TableFooter = props => {
    const{totalCost} = props;
    return (
        <tfoot>
            <tr><td colSpan='4'>Total Cost: {totalCost} PLN </td></tr>
        </tfoot>
    )
}

export default TableFooter;