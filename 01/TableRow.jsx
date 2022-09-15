import React from 'react';

const TableRow = (props) => {
    const { items } = props
    console.log( items )
    const style = {
        border: '1px solid black',
        borderCollapse: 'collapse'
    }
    return (
        <tr>
            {
            items.map((item, index) => (
                <td key={index} style={style}>{item}</td>
            ))    
            }            
        </tr>

    );
}

export default TableRow;

