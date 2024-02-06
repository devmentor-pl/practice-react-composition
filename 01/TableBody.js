import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map(item => (
        <TableRow
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
