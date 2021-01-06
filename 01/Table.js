import React from 'react';

import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

class Table extends React.Component {
    render() {
        const {data} = this.props;
        const listPrices = data.map(item => {
            return {
                id: item.id,
                name: item.name, 
                price: item.price}
            })
        const orderList = data.map(item => {
            return {
                id: item.id,
                name: item.name,
                value: item.quantity * item.price
            }
        })
        const orderValue = data.reduce(function (total, element) { return (total + element.price * element.quantity) }, 0)
        console.log(data);

        return ( <table>
            <TableHeader listPrices={ listPrices } />
            <TableBody orderList={ orderList } />
            <TableFooter orderValue={ orderValue } />
        </table> )
    }
}

export default Table;
