import React from "react";

export class TableRow extends React.Component {
  render() {
    return (
      <tr>
        {this.props.items.map((item, index) => (
          <td key={index}>{item}</td>
        ))}
      </tr>
    );
  }
}
