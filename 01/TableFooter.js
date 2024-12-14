import React, { Component } from 'react';

class TableFooter extends Component {
  getTotal() {
    const { products } = this.props;
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }

  render() {
    const footerStyle = {
      background: '#6a0dad',
      color: 'white',
      textAlign: 'center',
    };

    const cellStyle = {
      border: '1px solid black',
      padding: '10px',
    };

    return (
      <tfoot>
        <tr style={footerStyle}>
          <td colSpan="4" style={cellStyle}>
            Suma do zapłaty:
          </td>
          <td style={cellStyle}>{this.getTotal()} zł</td>
        </tr>
      </tfoot>
    );
  }
}

export default TableFooter;