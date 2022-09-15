import React from 'react';

const TableFooter = (props) => {
    const {items} = props
    const style = {
        border: '1px solid black',
        borderCollapse: 'collapse'
    }
    return ( 
        <tfoot>
            <tr>
            {
                items.map(item => (
                    <td 
                        style={item !== '' ? style : null}
                    >
                    {item}
                    </td>
                ))
            }                
            </tr>
        </tfoot>
     );
}
 
export default TableFooter;