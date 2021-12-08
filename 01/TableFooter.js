import React from "react";

export default class TableFooter extends React.Component {
  render() {
    const { data } = this.props;

     const sum = data.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    return (
      <tfoot>
        <tr>
          <th colSpan="3">TOTAL:</th>

          <th>{sum}PLN</th>
        </tr>
      </tfoot>
    );
  }
}
