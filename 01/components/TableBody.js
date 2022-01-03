import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
    render() {
        const { bodyContent } = this.props;

        return (
            <tbody>
                { bodyContent.map( itemData => <TableRow rowContent={itemData} /> )}
            </tbody>
        )
    }
}