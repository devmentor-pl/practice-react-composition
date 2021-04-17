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
                    <TableRow {...product}/>
                )
            });

            return (
            <tbody>
                {productsItem}
            </tbody>
        )
    }
}