import React from "react";
import TableRow from "./TableRow";

class TableBody extends React.Component {
    render() {
        const { data } = this.props

        const tableRows = data.map(item => <TableRow key={item.id} name={item.name} price={item.price} quantity={item.quantity} />)
       
        return (
            <tbody>
                {tableRows}
            </tbody>
        )
    }
}

export default TableBody