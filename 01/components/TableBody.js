import React from 'react';
import {TableRow} from './index';



export default class TableBody extends React.Component{
    render() {
        const {data:products} = this.props;
        
        return (
            <tbody>{products.map(item => <TableRow key={item.name } product={item} />)}</tbody>
        )
    }
}