
import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter'

class Table extends React.Component {
    render() {
        const {data} = this.props;

        return <table>
            <TableHeader/>
            <TableBody data={ data }/>
            <TableFooter data={data}/>
        </table>
    }
}

export default Table;
