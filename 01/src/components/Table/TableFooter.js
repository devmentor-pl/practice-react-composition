import React from 'react';

const TableFooter = (props) => {
  const { data } = props;

  return (
    <tfoot>
      <tr>
        <td>Summary</td>
        <td>{data.reduce((accumulator, item) => {
          return accumulator += item.quantity
        }, 0)}</td>
        <td>{data.reduce((accumulator, item) => {
          return accumulator += item.price * item.quantity
        }, 0)}</td>
      </tr>
    </tfoot>
  )
}

export default TableFooter