import React from 'react';
import TableRow from './TableRow';


export default class TableBody extends React.Component {
    render() {
        const {data} = this.props;
        const rows = data.map(element=>{
            return(
            <TableRow
            name = {element.name}
            price = {element.price}
            quantity = {element.quantity}
            sum = {element.price * element.quantity}
            />
            )
        })
        return(
            <tbody>{rows}</tbody>
        )
    }
}