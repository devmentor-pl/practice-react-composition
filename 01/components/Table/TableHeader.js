import React from "react";

const TableHeader = props => {
    const { data } = props;
    const columns = data.map(column => <th key={column}>{column}</th>);

    return (
        <thead>
            <tr>
                {columns}
            </tr>
        </thead>
    )
}

export default TableHeader;