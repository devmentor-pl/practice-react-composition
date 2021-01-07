import React from "react";

const TableRow = (props) => {

    const {
        name,
        price,
        quality,
    } = props;

    return (
        <tr>
            <td className="td"> { name } </td>
            <td className="td"> { price } </td>
            <td className="td">  { quality } </td>
            <td className="td">  { price * quality } </td>
        </tr>
    )


}



export default TableRow;