import React from 'react';

export default class TableFooter extends React.Component {
    render() {
        const { totalPrice } = this.props;

        return (
            <tfoot>
                <tr>                                      
                    <td colSpan={2}> Total price:  </td>
                    <td> { totalPrice } </td>                            
                    <td> PLN </td>                            
                </tr>               
            </tfoot>
        )
    }
}