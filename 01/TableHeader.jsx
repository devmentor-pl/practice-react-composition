import React from 'react';

const TableHeader = (props) => {
    const {data} = props
    const style = {
        border: '1px solid black',
        borderCollapse: 'collapse'
    }
    return ( 
        <tr>
            {data.map(item => (
                <th style={style}>{item.name}</th>
            ) )}
        </tr>
     );
}
 
export default TableHeader;