import React from "react";
import { v4 as uuid } from "uuid";
class TableRow extends React.Component {
  render() {
    const { rowData } = this.props;
    return (
      <tr>
        {rowData.map((data) => {
          return <td key={uuid()} >{data}</td>;
        })}
      </tr>
    );
  }
}
export default TableRow;
