import React from "react";
import { v4 as uuid } from 'uuid';

export default class TableFooter extends React.Component {
    render() {
        const { totalPrice } = this.props;

        return (
            <tfoot>
                <tr>
                    <td className='column summary' colSpan='3' key={ uuid() }>Total Price of all items:</td>
                    <td className='column summary' colSpan="1" key={ uuid() }> {totalPrice} </td>
                </tr>
            </tfoot>
        )
    }
}