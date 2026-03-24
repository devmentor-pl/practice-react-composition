import React from "react";

class TableHeader extends React.Component {
  render() {
    const { headers, style } = this.props;
    return (
      <thead>
        <tr style={style}>
          {headers.map((header, idx) => (
            <th style={style} key={idx}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
