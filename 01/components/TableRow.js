import React from "react";
class TableRow extends React.Component {
  render() {
    const { rowData } = this.props;
    return (
      <tr>
        {rowData.map((data, index) => {
          return <td key={index}>{data}</td>;
        })}
      </tr>
    );
  }
}
export default TableRow;
