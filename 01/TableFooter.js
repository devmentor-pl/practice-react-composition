import React from 'react'

class TableFooter extends React.Component {
  render () {
    const { footerData } = this.props

    return (
        <tfoot>
            <tr>
              {footerData.map((col,index) => <td key={index}>{col}</td>)}
            </tr>
        </tfoot>
    )
  }
}

export default TableFooter
