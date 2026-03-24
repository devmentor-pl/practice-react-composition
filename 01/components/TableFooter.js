import React from "react";

class TableFooter extends React.Component {
  render() {
    const { total, style } = this.props;
    return (
      <tfoot>
        <tr>
          <td
            colSpan="5"
            style={{ ...style, textAlign: "right", fontWeight: "bold" }}
          >
            Suma: {total}
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default TableFooter;
