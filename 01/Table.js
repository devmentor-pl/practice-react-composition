import React from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

class Table extends React.Component {
 
    render() {
        const {data} = this.props;
        const productsHeader = data.map(product => `${product.name} : ${product.price}`)

        const productsBody = data.map(product =>`${product.name} : ${product.price * product.quantity}`)

        const productsFooter = data.reduce((finalPrice,product) => finalPrice + (product.price * product.quantity),0) 

        return(
        <table>
            <TableHeader headerData={productsHeader}/>
            <TableBody bodyData={productsBody}/>
            <TableFooter footerData={productsFooter}></TableFooter>
        </table>
        )
    }
}

export default Table;
