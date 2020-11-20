import React from "react";

class Table extends React.Component {
  render() {
    const { data } = this.props;
    const list = data.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.price * item.quantity}</td>
        </tr>
      );
    });

    const totalPrice = data.reduce((price, item) => {
      return price + item.price * item.quantity;
    }, 0);

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default Table;
