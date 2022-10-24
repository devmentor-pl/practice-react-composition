import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component{
    render() {
        const {data} = this.props;
        const list = data.map(element=>{
            return(
                <TableRow
                key={element.id}
                id = {element.id}
                name = {element.name}
                price = {element.price}
                quantity = {element.quantity}
                />
            )
        })
        return(
            <tbody>{list}</tbody>
        )
    }
}