import React from 'react';

const TableHeader = props => {
    const { id, name, price, quantity, totalPrice } = props;

    return (
        <thead>
            <tr>
                <th>{id}</th>
                <th>{name}</th>
                <th>{price}</th>
                <th>{quantity}</th>
                <th>{totalPrice}</th>
            </tr>
        </thead>
    )
}

export default TableHeader;