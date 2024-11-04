import React from "react";

class TableFooter extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <tfoot>
        <br />
        <tr>
          <td>SUM:</td>
          <td>{total.reduce((acc, total) => acc + total)}</td>
        </tr>
      </tfoot>
    );
  }
}

export default TableFooter;
