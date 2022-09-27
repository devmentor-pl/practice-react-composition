import React from "react";
import { v4 as uuid } from "uuid";

class TableHeader extends React.Component {
  render() {
    const {headerNames} = this.props
    return (
      <thead>
        <tr>
            {headerNames.map(name => <th key={uuid()}>{name}</th>)}
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
