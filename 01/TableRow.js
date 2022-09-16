import React from 'react'

class TableRow extends React.Component {
  render () {
    const { rowData } = this.props

    return (
        <tr>
            {rowData.map((col,index) => <td key={index}>{col}</td>)}
        </tr>
    )
  }
}

export default TableRow
