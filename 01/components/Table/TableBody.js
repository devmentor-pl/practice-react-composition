import React from 'react'
import TableRow from './TableRow'

class TableBody extends React.Component {
  render () {
    const { children } = this.props

    return (
      <tbody>
        { children }
      </tbody>
    )
  }
}

export default TableBody