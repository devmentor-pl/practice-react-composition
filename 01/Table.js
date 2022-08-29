import React from 'react';

import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'


class Table extends React.Component {
    render() {
        const {data} = this.props;

        return <table style={{
            border: '1px solid black'
        }}>
            <TableHeader headers={data[0]} />
            <TableBody data ={data}/>
            <TableFooter data ={data}/>
        </table>
    }
}

export default Table;
