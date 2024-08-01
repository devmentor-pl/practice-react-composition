import React, { Component } from 'react'
import TableRow from './TableRow.js'

export class TableHead extends Component {
  render() {
    const {name, price, quantity} = this.props
    return (
      <thead>
        <TableRow name={name} price={price} quantity={quantity}/>
      </thead>
    )
  }
}

export default TableHead

