import React from "react"

class TableFooter extends React.Component{
    render(){

        const {totalPriceArray} = this.props
        const initialValue = 0
        const totalPrice = totalPriceArray.reduce((previousValue, currentValue) => 
            previousValue + currentValue, initialValue
        )
    
        return (
            <td>Total = {totalPrice} zł</td>
        )

    }
}

export default TableFooter