import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
    render () {
        const { data } = this.props;
        const list = data.map(el => {
            const { name, price, quantity } = el;
            return (
                <TableRow name={ name } price={ price } quantity={ quantity } key={ price }/>
            )
        })
        return (
            <tbody>
                { list }
            </tbody>
        )
    }
}