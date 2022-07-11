import React from 'react';
import TableRow from './TableRow.jsx'

const TableBody = (props) => {
    const { data } = props
    const style = {
        border: '1px solid black',
        borderCollapse: 'collapse'
    }
    return (
        <tbody>
                <tr>
                    {
                        data.map(item =><TableRow value={item.price} />)
                    }
                </tr>
                <tr>
                    {
                        data.map(item =><TableRow value={item.quantity} />)
                    }
                </tr>
                <tr>
                    {
                        data.map(item =><TableRow value={item.quantity * item.price} />)
                    }
                </tr>
        </tbody>
    );
}

export default TableBody;

