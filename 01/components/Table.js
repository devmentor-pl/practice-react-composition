import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  render() {
    const { data } = this.props;

    const onlyItemSummary = data.map((item) => {
      const { price, quantity } = item;
      return { itemSummary: price * quantity };
    });

    const dataWithItemSummary = data.map((element, index) => {
      return { ...element, ...onlyItemSummary[index] };
    });

    const dataKeyNames = ["id", "name", "price", "quantity", "itemSummary"];

    return (
      <table>
        <TableHeader names={dataKeyNames} />
        <TableBody
          data={dataWithItemSummary}
          cols={dataKeyNames}
        />
        <TableFooter sumData={dataWithItemSummary} />
      </table>
    );
  }
}

export default Table;
