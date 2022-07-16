import React from 'react';

export default class TableFooter extends React.Component {
    render () {
        const { data } = this.props;

        const sum = data.reduce((prev, next) => {
            const { price, quantity } = next;
            return prev + ( price * quantity );
        }, 0)
        return (
            <tfoot>
                <tr>
                    <td>
                        Suma do zapłaty: {sum}
                    </td>
                </tr>
            </tfoot>
        )
    }
}