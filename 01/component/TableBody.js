import React from "react";
import TableRow from "./TableRow ";

class TableBody extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <tbody>
                {data.map((item) => (
                    <TableRow key={item.id} item={item} />
                ))}
            </tbody>
        );
    }
}

export default TableBody;
