import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';


class Table extends React.Component {
    render() {

        console.log(this.props.dataProp);
        return <table>
            <TableHeader />
            <TableBody data={this.props.dataProp} />
            <TableFooter />
        </table>
    }
}

export default Table;
