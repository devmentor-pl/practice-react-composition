import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log('Dane:', data);
        console.log('Dane:', data[0].name);

        return (
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
                <TableHeader />
                <TableBody data={data}/>
                <TableFooter data={data}/>  
            </table>
        )
    }
}

export default Table;
