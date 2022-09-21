import React from "react"

class TableHeader extends React.Component {
    render() {
        const { name, price } = this.props

        return (

            <td>{name} - {price}zł</td>
           
        )
    }

}

export default TableHeader