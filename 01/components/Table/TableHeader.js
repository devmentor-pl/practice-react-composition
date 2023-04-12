import React from "react";

const TableHeader = props => {
    const { columnsNames } = props;
    const columns = columnsNames.map(column => <th key={column.propName}>{column.label}</th>);

    return (
        <thead>
            <tr>
                {columns}
            </tr>
        </thead>
    );
}

export default TableHeader;