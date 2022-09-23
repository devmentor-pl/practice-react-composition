import React from 'react';

export default class TableFooter extends React.Component {
    render() {
        const {data} = this.props;
        const reducer = (sum, el) => sum +(el.price*el.quantity);
        const totalPrice = data.reduce(reducer, 0);

        return (
            <tfoot>
                <tr>
                    <th>{totalPrice}</th>
                </tr>
            </tfoot>
        )
    }
}