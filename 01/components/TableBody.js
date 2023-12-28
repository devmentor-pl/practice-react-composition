import React from "react";
import TableRow from "./TableRow";

class TableBody extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <tbody>
                {items.map(item => (
                    <TableRow key={item.id} item={item} />
                ))}
            </tbody>
        );
    }
}

export default TableBody;