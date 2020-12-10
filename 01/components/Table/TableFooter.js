import React from 'react'

const TableFooter = props => {
    const { totalBasketSum: total } = props;

    return (
        <tfoot>
                <tr>
                    <td>Sum: </td>
                    <td>{ total }</td>
                </tr>
        </tfoot>
    )
}

export default TableFooter
