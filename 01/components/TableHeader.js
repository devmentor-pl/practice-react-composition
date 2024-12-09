import React from "react";

export class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.names.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
    );
  }
}
