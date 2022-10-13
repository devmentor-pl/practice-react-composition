import React from "react"

class TableRow extends React.Component {
  render() {
    const { items } = this.props

    return (
      <tr>
        {items.map((i, index) => (
          <td key={index}>{i}</td>
        ))}
      </tr>
    )
  }
}

export default TableRow
