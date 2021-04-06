import React from 'react';

import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import TableFooter from './components/TableFooter';

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);

        return (
            <table>
                <TableHeader
                    id={'Id'}
                    name={'Name'}
                    price={'Price'}
                    quantity={'Quantity'}
                    totalPrice={'Total Price'}
                />
                <TableBody data={data} />
                <TableFooter data={data} />
            </table>
        )
    }
}

export default Table;
