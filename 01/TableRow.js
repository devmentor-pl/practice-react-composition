import React from "react"

export const TableRow = props => {
    const {data} = props
    return <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td>
        <td>{data.price * data.quantity}</td>
    </tr>
}

export default TableRow