import React, { Component } from 'react';
import TableRow from './TableRow';

class TableBody extends Component {
  render() {
    const rowStyle = {
      borderBottom: '1px solid purple',
    };

    return (
      <tbody>
        {this.props.products.map((product) => (
          <TableRow key={product.id} product={product} rowStyle={rowStyle} />
        ))}
      </tbody>
    );
  }
}

export default TableBody;