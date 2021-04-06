import React from 'react';

import TableRow from './TableRow';

class TableBody extends React.Component {
    render() {
        const { data } = this.props;
        return data.map(row => {
            return (
                <tbody key={row.id}>
                    <TableRow row={row} />
                </tbody>
            )
        });
    }
}

export default TableBody;