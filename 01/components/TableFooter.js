import React from 'react';

class TableFooter extends React.Component {
    render() {
        const {data} = this.props
        const totalSum = data.reduce( (total, element) => {
            return element.price * element.quantity + total;
        }, 0)

        return ( 
            <tfoot>
                <tr>
                    <td>Total:</td>
                    <td></td>
                    <td></td>
                    <td>{totalSum}</td>
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter;