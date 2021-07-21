import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';


class Table extends React.Component {
    render() {


        return <table>
            <TableHeader />
            <TableBody />
            <TableFooter />
        </table>
    }
}

export default Table;
