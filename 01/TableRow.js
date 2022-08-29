import React from 'react'

class TableRow extends React.Component {
  render () {
    const { rowData } = this.props

    return (
        <tr>
            <td>{rowData}</td>
        </tr>
    )
  }
}

export default TableRow
