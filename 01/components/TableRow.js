import React from "react";

class TableRow extends React.Component {
    render() {
        const {name, price} = this.props
        const style = {
            border: '1px solid rgb(190, 190, 190)',
  	        padding: '5px 10px',
            textAlign: 'center'
        }
      return (
        <tr>
        <th style={style}>{name}</th>
        <td style={style}>{price}</td>
        </tr>
      )
    }
  }
  
  export default TableRow  