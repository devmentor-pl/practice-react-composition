import React from 'react';
import TableHeader from './TableHeader.jsx'
import TableBody from './TableBody.jsx'
import TableRow from './TableRow.jsx'
import TableFooter from './TableFooter.jsx'

class
 Table extends React.Component {

    renderRows() {
        const {data} = this.props 
        return data.map(({id, name, price, quantity}) => {
            return (
                <TableRow 
                    key={id}
                    items={[id, name, price, quantity, price * quantity]} 
                />
            )
        })
    }

    priceAll() {
        const {data} = this.props
        console.log(data)
        let result = 0
        result = data.reduce((prev, next) => prev + next.price * next.quantity, 0)
        console.log(result)
        return result
    }

    render() {
        const {data} = this.props;
        console.log(data);

        const style = {
            border: '1px solid black',
            borderCollapse: 'collapse',
            width: '100%'
        }

        return (
        <table style={style}>
            <TableHeader data={['Id', 'Name', 'Ilość', 'Cena', 'Razem']} />
            <TableBody>
                {
                    this.renderRows()
                }
            </TableBody>
            <TableFooter items={['','','','',this.priceAll()]} />
        </table>)
    }
}

export default Table;
