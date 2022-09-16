import React from 'react'

class TableHeader extends React.Component {
  render () {
    const { headerData } = this.props

    return (
        <thead>
            <tr>
              {headerData.map((col,index) => <th key={index}>{col}</th>)}
            </tr>
        </thead>
    )
  }
}

export default TableHeader
