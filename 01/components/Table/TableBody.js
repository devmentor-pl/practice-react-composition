import React from "react";
import TableRow from "./TableRow.js";

export default class TableBody extends React.Component {
    render() {
        const {data,cols} = this.props;
        const itemsRows = data.map(
            item => {
                return (
                    <TableRow key={item.id} item={item} cols={cols} />
                )
            }
        )
        return (
            <tbody>
                {itemsRows}
            </tbody>
        )
    }
}