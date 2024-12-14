import React, { Component } from 'react';

class TableHeader extends Component {
  render() {
    const headerStyle = {
      background: '#6a0dad',
      color: 'white',
      border: '1px solid black',
      textAlign: 'center',
    };

    const cellStyle = {
      border: '1px solid black',
      padding: '10px',
    };

    const { colNames } = this.props;

    return (
      <thead>
        <tr style={headerStyle}>
          {colNames.map((colName) => (
            <th key={colName} style={cellStyle}>
              {colName}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;