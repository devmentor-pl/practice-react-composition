import React from "react";
import TableRow from './TableRow'
import { v4 as uuid } from "uuid";

class TableBody extends React.Component{
    render(){
        const {bodyData} = this.props
        return(
            <tbody>
                {bodyData.map(data=>{
                    return <TableRow key={uuid()} rowData={data}></TableRow>
                })}
            </tbody>
        )
    }
}
export default TableBody