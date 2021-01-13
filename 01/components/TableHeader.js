import React from 'react';

const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        <th colSpan='1'>Nazwa przedmiotu</th>
        <th colSpan='1'>Cena</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
