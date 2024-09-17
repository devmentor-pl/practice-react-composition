import React from 'react';

const TableRow = (props) => {
    const { product, columns } = props;

    return (
        <tr>
            {columns.map((i, index) => (
                <td key={index}>{product[i.propName]}</td>
            ))}
        </tr>
    )
}

export default TableRow;
