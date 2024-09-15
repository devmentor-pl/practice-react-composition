import React from 'react';
import TableRow from './TableRow'

class TableFooter extends React.Component {
    render() {
        return (
            <tfoot>
                <tr>
                    <TableRow items={this.props.items} />
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter;
