import React from 'react';
import {TableRow} from './index';



export default class TableBody extends React.Component{
    render() {
        const products = this.props.data;
        
        return (
            <tbody>{products.map(item => <TableRow key={item.name } product={item} />)}</tbody>
        )
    }
}