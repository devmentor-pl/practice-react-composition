import React from "react";
import TableRow from './TableRow';

export default class TableFooter extends React.Component {
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