import React from 'react'
import TableRow from './TableRow'

class TableFooter extends React.Component {
  render () {
    const { items } = this.props

    return (
      <tfoot>
        <TableRow items={ items } />
      </tfoot>
    )    
  }
}

export default TableFooter