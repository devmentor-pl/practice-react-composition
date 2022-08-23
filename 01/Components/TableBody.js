import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
    render() {
        const { data } = this.props;       
        const rows = data.map(row => <TableRow key={ row.id } row = { row }/>)

        return (
            <tbody>
                { rows } 
            </tbody>
        )
    }
}