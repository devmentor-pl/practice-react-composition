import React from 'react'

class TableRow extends React.Component {

  render() {
    return (
      <tr>
         {this.props.row.map(item => <td key={item}>{item}</td>)}
        </tr>
    )
  }
}

export default TableRow