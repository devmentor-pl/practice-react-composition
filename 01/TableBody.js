import React from 'react';
import {TableRow} from './index';

const TableBody = props => {
    const {data} = props;
        return(
            <tbody>
                {data.map(item => <TableRow name={item.name} price={item.price} quantity={item.quantity}/>)}
            </tbody>
        )
} 

export default TableBody;












