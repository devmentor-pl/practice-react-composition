import React from 'react'

import NarrowNumberColumn from './styles/NarrowNumberColumn';
import NarrowStringColumn from './styles/NarrowStringColumn';
import numberSeparator from './styles/NumberSeparator';

class TableFooter extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        let totalPrice = 0;

        for (let i = 0; i < data.length; i++) {
            totalPrice = totalPrice + (data[i].price * data[i].quantity);
        }

        return (
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style={NarrowStringColumn}><strong>Suma:</strong></td>
                    <td style={NarrowNumberColumn}><strong>{numberSeparator(totalPrice)}</strong></td>
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter;