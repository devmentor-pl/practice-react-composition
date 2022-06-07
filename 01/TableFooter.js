import React from 'react'

const TableFooter = props => {
    const {totalPrice} = props

    return (
        <tfoot>
            <tr>    
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Suma: {totalPrice}</th>
            </tr>
        </tfoot>
   ) 
}

export default TableFooter;