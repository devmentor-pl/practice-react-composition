import React from 'react'

class TableFooter extends React.Component {

  render() {
    return (
      <tfoot>
        <tr>
          {this.props.items.map((item, index) => <td key={index}>{item}</td>)}
        </tr>
      </tfoot>
    )
  }
}

export default TableFooter