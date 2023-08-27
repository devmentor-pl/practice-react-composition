import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);

        const total = data.reduce((acc, item) => acc + item.price * item.quantity, 0)

        return (
            <table>
                <TableHeader />
                <TableBody data={data} />
                <TableFooter total={total} />
            </table>)
    }
}

export default Table;
