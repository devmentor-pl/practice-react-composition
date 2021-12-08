import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <table>
        <TableHeader data={data[0]} />
        <TableBody>
          {data.map((item) => {
            return <TableRow key={item.id} data={item} />;
          })}
        </TableBody>
        <TableFooter data={data} />
      </table>
    );
  }
}

export default Table;
