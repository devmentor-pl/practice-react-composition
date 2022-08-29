import React from "react";
import TableRow from './TableRow'

export const TableBody = props => {
    const {data} = props
    const tableRow = data.map(item => {
        return (
            <TableRow data={item}/>
        )
    })

    return tableRow

}

export default TableBody