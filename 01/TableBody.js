import React from 'react'
import TableRow from './TableRow'

class TableBody extends React.Component {
  render () {
    const { bodyData } = this.props

    return (
        <tbody>
          {bodyData.map(({id,name,price,quantity}, index) => <TableRow key={index} rowData = {[id,name,price,quantity,price*quantity]} />)}
        </tbody>
    )
  }
}

export default TableBody
