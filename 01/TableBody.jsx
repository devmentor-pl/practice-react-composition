import React from 'react';
import TableRow from './TableRow.jsx'

const TableBody = (props) => {
    const { children } = props
    const style = {
        border: '1px solid black',
        borderCollapse: 'collapse'
    }
    return (
        <tbody>
            {
                children
            }
        </tbody>
    );
}

export default TableBody;

