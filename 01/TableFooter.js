import React from 'react';

const TableFooter = props => {
    const {totalPrice} = props;

    return (
        <tfoot>
            <tr>
                <td colSpan={5}>Wartość zamówienia: {totalPrice}</td>
            </tr>
        </tfoot>
    )
}

export default TableFooter;