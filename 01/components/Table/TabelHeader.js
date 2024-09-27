import React from "react"

export default class TableHeader extends React.Component {
  render() {
    const { headerData } = this.props
    return (
      <thead>
        <tr>
          {
            headerData.map((headerName, key) => {
              return <th key={key}>{headerName}</th>
            })
          }
        </tr>
      </thead>
    )
  }
}