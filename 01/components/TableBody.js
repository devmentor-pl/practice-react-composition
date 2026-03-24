import React from "react";
import TableRow from "./TableRow";

class TableBody extends React.Component {
  render() {
    const { data, style } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} item={item} style={style} />
        ))}
      </tbody>
    );
  }
}

export default TableBody;
