import React, { Component } from 'react'

export class TableFooter extends Component {
    render() {
        return (
            <tfoot>
                <tr>
                    <th>Total price:</th>
                    <td>{this.props.data.reduce((acc, item) =>  acc + item.price * item.quantity, 0)}</td>
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter