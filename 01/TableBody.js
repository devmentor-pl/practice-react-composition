import React from 'react';
import TableRow from './TableRow.js'



const TableBody = props =>{
    const { books }  = props


    const list = books.map(n=><TableRow element={n} />)

    return <tbody>{list}</tbody>


 
}

export default TableBody