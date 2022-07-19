import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
    render() {
        const { bodyData } = this.props;

        return (
            <tbody>
                { bodyData.map( data => {
                    const content = data[0];
                    const id = data[1];

                    return <TableRow key={id} rowData={content} /> }
                )}
            </tbody>
        )
    }
}