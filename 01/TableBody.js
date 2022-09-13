import React from "react"
import TableRow from "./TableRow"

class TableBody extends React.Component {

    render() {

        const { data } = this.props

        return (
            data.map(element => {
                return (
                    
                    <TableRow price={parseInt(element.price)} quantity={parseInt(element.quantity)} />
                    
                )
            })

        )


    }
}

export default TableBody