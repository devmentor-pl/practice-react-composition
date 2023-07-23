import React from "react";

export default class TableFooter extends React.Component {
  render() {
    const { data } = this.props

    const sum = data.reduce((acc, product) => {
      const { quantity, price } = product
      return acc + (quantity * price)
    }, 0)
    return (
      <tfoot>
        <tr>
          <td colSpan={3}>
            SUM:
          </td>
          <td>
            {sum}
          </td>
        </tr>
      </tfoot>
    )
  }
}