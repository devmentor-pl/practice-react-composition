import React from 'react';

export default class TableFooter extends React.Component {
  render() {
    const { data } = this.props;
    const totalSum = data.reduce((acc, curr) => {
      const { price, quantity } = curr
      return acc + price * quantity
    }, 0)
    return (<tfoot>
      <tr>
        <th>Total Sum</th><td>{totalSum}</td>
      </tr>
    </tfoot>)
  }
}