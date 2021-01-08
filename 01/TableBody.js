import React from 'react'
import TableRow from './TableRow'

class TableBody extends React.Component {
    render() {
        const {orderList} = this.props
        const bodyContent = orderList.map(item =>
            <TableRow key={ item.id } orderElement={ item }/>)

        return ( <tbody>
            { bodyContent }
        </tbody> )
    }
}

export default TableBody;