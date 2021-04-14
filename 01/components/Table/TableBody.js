import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {products} = this.props;

        const productsItem = products.map(product => {
            return(
                    <TableRow price={product.price} name={product.name} quatity={product.quantity}/>
                )
            });

            return (
            <tbody>
                {productsItem}
            </tbody>
        )
    }
}