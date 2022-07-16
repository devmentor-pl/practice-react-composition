import React from 'react';

export default class TableHeader extends React.Component{
    render() {
        const style = {color:'blue', backgroundColor:'yellow'}
        return (
            <thead>
                <tr style={style}>
                    <th>Product</th><th>Price</th><th>Quantity</th><th>Sum</th>
                </tr>
            </thead>
        )  
    }
}