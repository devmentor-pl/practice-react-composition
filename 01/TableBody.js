import React from "react";
import TableRow from "./TableRow";

class TableBody extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((el) => (
          <TableRow key={el.id} element={el} />
        ))}
      </tbody>
    );
  }
}

export default TableBody;
