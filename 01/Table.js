import React from 'react';
import TableHeader from './components/TableHeader';
import TableFooter from './components/TableFooter';
import TableBody from './components/TableBody';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
        <table>
            <TableHeader />
            <TableBody />
            <TableFooter />
        </table>
        )
    }
}

export default Table;
