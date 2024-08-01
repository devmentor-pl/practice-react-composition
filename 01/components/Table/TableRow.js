import React, { Component } from 'react'

export class TableRow extends Component {
    render() {
        const {name, quantity, price} = this.props
        return (
            <tr>
                <th>{name}</th>
                <th>{quantity}</th>
                <th>{price}</th>
            </tr>
        )
    }
}

export default TableRow