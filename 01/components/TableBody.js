import React from "react";
import TableRow from './TableRow'

class TableBody extends React.Component{
    render(){
        const {body} = this.props
        return(
            <tbody>
                {body.map(data=>{
                    return <TableRow rowData={data[0]}></TableRow>
                })}
            </tbody>
        )
    }
}
export default TableBody