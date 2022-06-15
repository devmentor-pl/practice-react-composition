import React from 'react';

const TableHeader = props => {
    const {item, price, quantity, total} = props;
    const headerStyles = {
        border: 'black solid 1px'
    }
        return (
            <thead>
                <tr>
                    <th style={headerStyles}>{item}</th><th style={headerStyles}>{price}</th><th style={headerStyles}>{quantity}</th><th style={headerStyles}>{total}</th>
                </tr>
            </thead>
        )
}

export default TableHeader;