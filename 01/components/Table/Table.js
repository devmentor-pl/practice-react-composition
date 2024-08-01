import React from 'react';
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
            <table>
                <TableHead name={'Product'} price={'Price'} quantity={'Quantity'}/>
                <TableBody data={data}/>
                <TableFooter data={data} />
            </table>
        )
    }
}

export default Table;
