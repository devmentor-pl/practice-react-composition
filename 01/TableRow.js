import React from 'react'

class TableRow extends React.Component {
    render() {
        const {orderElement} = this.props

        return ( <tr>
            <td>{ orderElement.name }</td>
            <td>{ orderElement.value }</td>
        </tr> )
    }
}

export default TableRow;