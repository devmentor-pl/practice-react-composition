import React from "react";
import { v4 as uuid } from "uuid";
import TableRow from "./TableRow";

class TableBody extends React.Component {
    render() {
        const { data } = this.props;

        return data.map((p) => (
            <TableRow
                key={uuid()}
                name={p.name}
                price={p.price}
                qt={p.quantity}
            />
        ));
    }
}

export default TableBody;
