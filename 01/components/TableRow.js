import React from "react";

class TableRow extends React.Component {
  render() {
    const { rowData } = this.props;
    return (
      <tr>
        {rowData.map((data) => {
          return <td>{data}</td>;
        })}
      </tr>
    );
  }
}
export default TableRow;
