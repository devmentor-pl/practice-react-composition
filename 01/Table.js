import React from 'react';
import TableHeader from './components/TableHeader';
import TableFooter from './components/TableFooter';
import TableBody from './components/TableBody';

class Table extends React.Component {
    render() {
        return (
        <table>
            <TableHeader headers={}/>
            <TableBody rows={}/>
            <TableFooter totalPrice={} />
        </table>
        )
    }
}

export default Table;
