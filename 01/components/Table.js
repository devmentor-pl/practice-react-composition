import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableRow from './TableRow';

class Table extends React.Component {
    render() {

        const {data, style} = this.props;
        const tableRows = data.map((product) => {
            const {id, name, price, quantity} = product;
            
            return (
                <TableRow style={style} key={id} id={id} name={name} price={price} quantity={quantity} />
            )
        })

        return (
            <table style={style}>
                <TableHeader />
                <TableBody data={data}>
                    {tableRows}
                </TableBody>
                <TableFooter data={data}/>
            </table>
        )
    }
}

export default Table;