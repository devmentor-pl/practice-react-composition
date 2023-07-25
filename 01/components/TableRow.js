import React from "react";

const TableRow = (props) => {
  const { item, cols } = props;
  const itemCells = cols.map((keyName, index) => {
    return <td key={index}>{item[keyName]}</td>;
  });
  return <tr>{itemCells}</tr>;
};

export default TableRow;
