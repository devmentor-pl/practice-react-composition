import React from "react";
import { v4 as uuid } from "uuid";
import TableRow from "./TableRow";

class TableBody extends React.Component {
    render() {
        const { data } = this.props;
        const products = data.map((p) => ({ ...p, key: uuid() }));

        return products.map((p) => (
            <TableRow
                name={p.name}
                price={p.price}
                qt={p.quantity}
                key={p.key}
            />
        ));
    }
}

export default TableBody;
