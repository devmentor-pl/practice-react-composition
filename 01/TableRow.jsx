import React from 'react';

const TableRow = (props) => {
    const { data, value } = props
    const style = {
        border: '1px solid black',
        borderCollapse: 'collapse'
    }
    return (
        <td style={style}>{value}</td>
    );
}

export default TableRow;

