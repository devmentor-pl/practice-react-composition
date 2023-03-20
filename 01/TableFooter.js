import React from 'react';

const TableFooter = (props) => {
    const { totalPrice, colQuantity } = props;

    return (
        <tfoot>
            <tr>
                <td colSpan={colQuantity}>Cena całkowita: {totalPrice} zł</td>
            </tr>
        </tfoot>
    );
};

export default TableFooter;