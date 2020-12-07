import React from 'react';

export default class TableBody extends React.Component {
  render() {
    const { data } = this.props;
    const tableRows = data.map(product => {
      const { id, name, price, quantity } = product;
      return (
        <tr key={id}>
          <th>{name}</th><td>{price}</td><td>{quantity}</td><td>{price * quantity}</td>
        </tr>
      )
    })
    return (<tbody>
      {tableRows}
    </tbody>)
  }
}