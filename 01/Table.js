import React from 'react';

import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import TableFooter from './components/TableFooter';

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);

        const arrHeader = [];
        for (const key in data[0]) {
            arrHeader.push(key.toUpperCase())
        }
        arrHeader.push('TOTAL PRICE');

        const totalPrice = data.reduce((total, item) => total + (item.price * item.quantity), 0);


        return (
            <table>
                <TableHeader columnName={arrHeader} />
                {
                    data.map(
                        row => <TableBody key={row.id} row={row} />
                    )
                }
                <TableFooter price={totalPrice} />
            </table>
        )
    }
}

export default Table;
