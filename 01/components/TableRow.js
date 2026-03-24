import React from "react";

class TableRow extends React.Component {
  render() {
    const { item, style } = this.props;
    const total = item.price * item.quantity;

    return (
      <tr style={style}>
        <td style={style}>{item.id}</td>
        <td style={style}> {item.name}</td>
        <td style={style}>{item.price}</td>
        <td style={style}>{item.quantity}</td>
        <td style={style}>{total}</td>
      </tr>
    );
  }
}

export default TableRow;
