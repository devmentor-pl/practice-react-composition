import React from 'react'

import NarrowNumberColumn from './styles/NarrowNumberColumn';
import WideStringColumn from './styles/WideStringColumn';
import numberSeparator from './styles/NumberSeparator';

const TableRow = ({id, name, price, quantity}) => {

    const total = price * quantity;
    console.log(total);

    return(
        <tr>
            <td style={NarrowNumberColumn}>{numberSeparator(id)}</td>
            <td style={WideStringColumn}>{name}</td>
            <td style={NarrowNumberColumn}>{numberSeparator(price)}</td>
            <td style={NarrowNumberColumn}>{numberSeparator(quantity)}</td>
            <td style={NarrowNumberColumn}>{numberSeparator(total)}</td>
        </tr>
    )
}

export default TableRow;