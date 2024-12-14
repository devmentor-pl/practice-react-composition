import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    const { id, name, price, quantity } = this.props.product;

    const rowStyle = {
      borderBottom: '1px solid black',
      background: '#9370db',
      textAlign: 'center',
    };

    const cellStyle = {
      border: '1px solid black',
      padding: '10px',
    };

    const values = [id, name, price, quantity, price * quantity];

    return (
      <tr style={rowStyle}>
        {values.map((value, index) => (
          <td key={index} style={cellStyle}>
            {value}
          </td>
        ))}
      </tr>
    );
  }
}

export default TableRow;