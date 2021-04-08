import React from 'react';

import TableRow from './TableRow';

class TableBody extends React.Component {
    render() {
        const { row } = this.props;

        return (
            <tbody>
                <TableRow row={row} />
            </tbody>
        )
    }
}

export default TableBody;