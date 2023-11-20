'use strict';
import React from 'react';
import TableRow from './TableRow';

class TableBody extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <TableRow
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </tbody>
    );
  }
}

export default TableBody;
