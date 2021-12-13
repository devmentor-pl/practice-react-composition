import React from "react";

export default class TableRow extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <tr>
        <th>{data.name}</th>
        <th>{data.price}</th>
        <th>{data.quantity}</th>
        <th>{data.price * data.quantity}PLN</th>
      </tr>
    );
  }
}
