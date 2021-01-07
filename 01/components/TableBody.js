import React from 'react'; 
import TableRow from '../components/TableRow'




const TableBody = ({ data }) => {

    const list = data.map((item) => {

        return(
        
                <TableRow
                key = {item.id}
                name = {item.name}
                price = {item.price}
                quality = {item.quality}
               />

           
        )
    })
    
    return <tbody> { list } </tbody>
}



export default TableBody;