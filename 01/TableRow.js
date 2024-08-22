import React from 'react';


const TableRow = props =>{


    
    
    const { element }  = props
    return (
       <tr>
    <td>{ element.id}</td>
    <td>{ element.name}</td>
    <td>{ element.price}</td>
    <td>{ element.quantity}</td>
    <td className = "prices">{ element.price * element.quantity}</td>
    </tr>
)
}

export default TableRow