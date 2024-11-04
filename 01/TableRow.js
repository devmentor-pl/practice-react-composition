import React from "react";

class TableRow extends React.Component {
  render() {
    const { element } = this.props;
    const { name, price, quantity } = element;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{price * quantity}</td>
      </tr>
    );
  }
}

export default TableRow;
