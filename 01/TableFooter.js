import React from 'react';

const TableFooter = props => {
    const {totalPrice} = props;
        return(
            <tfoot>
                <tr>
                <td>Total Sum</td>
                <td></td>
                <td></td>
                <td>{totalPrice}</td>
                </tr>
            </tfoot>
        )
} 

export default TableFooter;