import React from 'react';
import {v4 as uuid} from 'uuid';

const TableHeader = props => {
    const {headers} = props;
    const thElements = headers.map(header =>{
        return <th>{header}</th>;
    });

    return (
        <thead>
        <tr>
            {thElements}
            <th>Amount</th>
        </tr>
        </thead>
        
    )
}

export default TableHeader;
