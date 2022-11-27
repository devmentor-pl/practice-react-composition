import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

class Table extends React.Component {

    CreateRows() {
        const { data } = this.props

        return data.map((el => {
            const { id, name, price, quantity } = el
            const val = price * quantity
            return (<TableRow key={id} items={[id, name, price, quantity, val]} />)
        }))
    }

    calcSum() {
        const { data } = this.props
        const sum = data.reduce((acc, el) => acc + (el.price * el.quantity), 0)
        return sum
    }

    render() {
        const { data } = this.props

        return (
            <table>
                <TableHeader colNames={['id', 'name', 'price', 'quantity', 'value']} />
                <TableBody bodyKey={1}>
                    {this.CreateRows()}
                </TableBody>
                <TableFooter items={['', '', '', '', this.calcSum()]} />
            </table>
        )
    }
}

export default Table
