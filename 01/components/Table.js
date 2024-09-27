import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableRow from './TableRow';

class Table extends React.Component {

    getHeaderNames() {
        const { data } = this.props;

        return Object.keys(data[0])
    }

    getRows() {
        const { data } = this.props;

        return data.map(item => <TableRow row={[...Object.values(item), (item.price * item.quantity)]} />)
    }

    getTotalSum() {
        const { data } = this.props;
        const prices = [];

        data.map(item => {
            prices.push(item.price * item.quantity)
        })
       
        return prices.reduce((a, b) => a + b)
    }

    render() {
        const { data } = this.props;
        console.log(data);

        return (

            <table>
                <TableHeader header={this.getHeaderNames()} />
                <TableBody>
                    {this.getRows()}
                </TableBody>
                <TableFooter items={['', '', '', 'total sum', this.getTotalSum()]}/>
            </table>
        )
    }
}

export default Table;
