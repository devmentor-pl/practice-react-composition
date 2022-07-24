import React from 'react';

class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
        )
    }
}

export default TableHeader;