import React from 'react'
import '../index.css'



function TableFooter({totalPrice}) {
   

    
    return(
        <tfoot>
            <tr>
                <td className="td total">Price for all</td>
                <td className="td total"> { totalPrice } pln </td>
            </tr>
        </tfoot>
    )
}


export default TableFooter;