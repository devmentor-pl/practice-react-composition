import React from 'react';
import TableHeader from './TableHeader.jsx'
import TableBody from './TableBody.jsx'
import TableFooter from './TableFooter.jsx'

class Table extends React.Component {

    render() {
        const {data} = this.props;
        console.log(data);

        const style = {
            border: '1px solid black',
            borderCollapse: 'collapse'
        }

        return (
        <table style={style}>
            <TableHeader data={data} />
            <TableBody data={data} />
            <TableFooter data={data} />
        </table>)
    }
}

export default Table;
