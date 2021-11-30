import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <tbody>
                {item.map(row=><TableRow item={row}/>)}
            </tbody>
        )
    }
}