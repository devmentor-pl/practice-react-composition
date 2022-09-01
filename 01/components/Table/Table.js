import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

class Table extends React.Component {  
  renderRows() {
    const { data } = this.props

    return (
      data.map(({id, name, price, quantity}) => {
        return (
          <TableRow key={id} items={[id, name, price, quantity, (price*quantity)]} />
        )
      })
    )
  }

  getTotalPrice() {
    const { data } = this.props

    const totalPrice = data.reduce((acc, {price, quantity}) => acc + (price * quantity), 0)

    return totalPrice
  }

  render() {
    return (
      <table>
        <TableHeader 
          colNames={['id', 'product', 'price', 'quantity', 'total']} 
        />
        <TableBody>
          { this.renderRows() }
        </TableBody>        
        <TableFooter 
          items={['', '', '', '', this.getTotalPrice()]}
        />
      </table>      
    )
  }
}

export default Table