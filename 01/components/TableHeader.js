import React from "react";

class TableHeader extends React.Component {
  render() {
    const {headerNames} = this.props
    return (
      <thead>
        <tr>
            {headerNames.map(name => <th>{name}</th>)}
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
