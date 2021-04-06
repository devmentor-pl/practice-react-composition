import React from 'react';


class Product extends React.Component {
    render() {
        const { row } = this.props;

        return (
            <>
                <li data-id={row.id} data-name={row.name} data-price={row.price} >{row.id}: {row.name} - {row.price} zł </li>
            </>
        )
    }
}

export default Product;