import React from "react";

class TableHeader extends React.Component {
  render() {
    const style = {
        border: '1px solid rgb(190, 190, 190)',
        padding: '5px 10px'
    }
    return (
      <thead>
      <tr>
        <th style={style}>Items</th>
        <th style={style}>Price</th>
      </tr>
    </thead>
    )
  }
}

export default TableHeader;
