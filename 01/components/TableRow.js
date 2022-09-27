import React from "react";

class TableRow extends React.Component{
    render(){
        const {rowData} = this.props
        return(
            <tr>
                {rowData.map( data =>{
                    <td>{data}</td>
                })}
            </tr>
        )
    }
}
export default TableRow