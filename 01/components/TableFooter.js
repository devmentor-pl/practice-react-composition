import React from 'react';

class TableFooter extends React.Component {
  render() {
    const { data } = this.props;

    const totalAmount = data.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return (
      <tfoot>
        <tr>
          <td colSpan="4">Total:</td>
          <td>{totalAmount}</td>
        </tr>
      </tfoot>
    );
  }
}

export default TableFooter;
