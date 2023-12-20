import React from 'react';

class TableRow extends React.Component {
  render() {
    const { id, name, price, quantity } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{price * quantity}</td>
      </tr>
    );
  }
}

export default TableRow;
