import React from "react";
import TableRow from "./TableRow";
class TableFooter extends React.Component {
    render() {
         const { data } = this.props;
         let totalSum = data.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.quantity * currentValue.price
        }, 0)
        return (
            <tfoot>
            <TableRow name='Total' price={totalSum}/>
            </tfoot>
        )
    }
}

export default TableFooter;