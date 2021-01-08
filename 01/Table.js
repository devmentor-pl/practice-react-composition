import React from 'react';

import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

class Table extends React.Component {
    data = this.props.data

    orderList = () => {
        return this.data.map(item => {
            return {
                id: item.id,
                name: item.name,
                value: item.quantity * item.price
            }
        })
    }

    orderValue = () => {
        return this.data.reduce(function (total, element) { 
            return (total + element.price * element.quantity) }, 0)
    }

    render() {
        console.log(this.data);

        return ( <table>
            <TableHeader />
            <TableBody orderList={ this.orderList() } />
            <TableFooter orderValue={ this.orderValue() } />
        </table> )
    }
}

export default Table;
