import React from "react";
import TableRow from "./TableRow";

class TableFooter extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <tfoot>
        <tr>
            <td colSpan='3'>Total Price:</td>
            <td colSpan='1'>{data}</td>
        </tr>
      </tfoot>
    );
  }
}
export default TableFooter