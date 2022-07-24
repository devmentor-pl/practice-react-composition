import React from 'react';

class TableRow extends React.Component {
    render() {
        const product = this.props;
        const {style} = this.props
        return(
            <tr>
                <td style={style}>{product.name}</td>
                <td style={style}>{product.price}</td>
                <td style={style}>{product.quantity}</td>
                <td style={style}>{product.quantity*product.price}</td>
            </tr>
        )
    }
}

export default TableRow;