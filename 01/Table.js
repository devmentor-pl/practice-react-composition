import React from 'react';
import TableHeader from './components/Table/TableHeader';
import TableBody from './components/Table/TableBody';
import TableFooter from './components/Table/TableFooter';


class Table extends React.Component {
    render() {
        const {data} = this.props;

        return (
            <table>
                <TableHeader/>
                <TableBody products = {data} />
                <TableFooter data = {data}/>
            </table>
        )
    }
}

export default Table;
