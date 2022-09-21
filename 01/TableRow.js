import React from "react"

class TableRow extends React.Component{
    render(){

        const {price,quantity} = this.props

        return(
          
            <td>ilość  =  {quantity} suma  =  {price * quantity}  zł</td>
           
        )

    }
}

export default TableRow