import React from 'react';


const TableRow = (props) => {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quatity}</td>
        </tr>
    )
}


export default TableRow;