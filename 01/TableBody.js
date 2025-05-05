import React from "react";
import TableRow from "./TableRow";

const TableBody = props => {

    const {data} = props;

    return (
        <tbody>
            {data.map((el) => (
                <TableRow key={el.id} items={el}/>
            ))}
        </tbody>
    )
}

export default TableBody;