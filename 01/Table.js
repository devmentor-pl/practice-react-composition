import React from 'react';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import TableFooter from './components/TableFooter';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
            <table>
                <TableHeader/>
                <TableBody products = {data}/>
                <TableFooter data = {data}/>
            </table>
        )
    }
}

export default Table;
