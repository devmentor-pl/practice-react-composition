import React from 'react';

export default class TableRow extends React.Component {
  render() {
    const { id, name, price, quantity } = this.props;
    return (
      <tr key={id}>
        <th>{name}</th><td>{price}</td><td>{quantity}</td><td>{price * quantity}</td>
      </tr>
    )
  }
}