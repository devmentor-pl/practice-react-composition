import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

class Table extends React.Component {
  render () {
    const { data } = this.props
    const productsHeader = ['id','nazwa','cena','ilość','razem']
    const productsFinalPrice = data.reduce((finalPrice, product) => finalPrice + (product.price * product.quantity), 0)
    const productsFooter = ['','Suma do zapłaty za wszystko','','',productsFinalPrice]

    return (
        <table>
            <TableHeader headerData={productsHeader}/>
            <TableBody bodyData={data}/>
            <TableFooter footerData={productsFooter}></TableFooter>
        </table>
    )
  }
}

export default Table
