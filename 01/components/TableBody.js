import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <tbody>
                {item.map(row=><tr><TableRow item={row}/></tr>)}
            </tbody>
        )
    }
}