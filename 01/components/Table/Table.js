import React from 'react';
import TableHeader from './TabelHeader';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <table>
                <TableHeader headerData={['Product', 'Price', 'Quantity', 'Sum']} />
                <TableBody>
                    {
                        data.map(product => {
                            return <TableRow product={product} />
                        })
                    }
                </TableBody>
                <TableFooter data={data} />
            </table>
        )
    }
}

export default Table;
