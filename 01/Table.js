import React from 'react';
import TableHeader from './TableHeader.js'
import TableBody from './TableBody.js'
import TableFooter from './TableFooter.js'
class Table extends React.Component {


    sumAllPrices() {

        const { data } = this.props
        return data.reduce((accumulator, item) => accumulator + (item.price * item.quantity),
            0)

    }

    render() {
        const { data } = this.props;

        return <table>

            <TableHeader />
            <TableBody books={data} />
            <TableFooter sum={this.sumAllPrices()} />
        </table>
    }
}

export default Table;
