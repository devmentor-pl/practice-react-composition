import React from 'react'
import TableRow from './TableRow'

class TableBody extends React.Component {
 
    render() {
        const {bodyData} = this.props

        return(
            <tbody>
                <tr>
                {bodyData.map((product,index) => <TableRow key={index} rowData = {product} />)}
                </tr>
            </tbody>
        )
    }
}

export default TableBody
