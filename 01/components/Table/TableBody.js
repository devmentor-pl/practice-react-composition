import React, { Component } from 'react'
import TableRow from './TableRow'

export class TableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.data.map(item => {
          return (
            <TableRow key={item.id} name={item.name} quantity={item.quantity} price={item.price * item.quantity}/>
          )
        })}
      </tbody>
    )
  }
}

export default TableBody