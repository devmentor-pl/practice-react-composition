import React from "react";

const TableRow = props => {
    const { data, columnsNames } = props;
    const cells = columnsNames.map((columnName, index) => <td key={index} > {data[columnName.propName]}</td>);

    return (
        <tr>
            {cells}
        </tr>
    );
}

export default TableRow;