import React from 'react'

class TableHeader extends React.Component {

  render() {
    return (
      <thead>
        <tr>
          {this.props.header.map(name => <th key={name}>{name}</th>)}
          <th>sum</th>
        </tr>
      </thead>
    )
  }
}

export default TableHeader