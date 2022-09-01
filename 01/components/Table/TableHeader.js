import React from 'react'

class TableHeader extends React.Component {
  render () {
    const { colNames } = this.props

    return (
      <thead>
        <tr>
          {colNames.map((name, index) => 
            <th key={index}>{name}</th>  
          )}
        </tr>
      </thead>
    )    
  }
}

export default TableHeader