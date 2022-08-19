import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tbody>
                {data.map(product => <TableRow data={product} key={product.id} />)}
            </tbody>
        );
    };
};