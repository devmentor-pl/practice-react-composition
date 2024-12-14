import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);

        const tableStyle = {
            border: '2px solid purple',
            borderCollapse: 'collapse',
            width: '80%',
            margin: '0 auto',
            textAlign: 'left',
        };

        return (
            <table style={tableStyle}>
                <TableHeader colNames={['ID', 'Nazwa', 'Cena', 'Ilość', 'RAZEM']} />
                <TableBody products={data} />
                <TableFooter products={data} />
            </table>
        );
    }
}

export default Table;