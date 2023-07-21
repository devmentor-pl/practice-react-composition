import React from "react";

export default class TableRow extends React.Component {
  render() {
    const { product } = this.props
    const {name, price, quantity} = product
    const sum = price * quantity
    return (
      <>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{sum}</td>
      </>
    )
  }
}