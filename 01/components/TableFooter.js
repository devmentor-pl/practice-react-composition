import React from 'react';


class TableFooter extends React.Component {
    render() {
        const { data } = this.props;
        const arr = [];
        return data.map(row => {
            const totalPrice = row.price * row.quantity;
            arr.push(totalPrice);
            let sum = 0;
            if (arr.length === data.length) {
                sum = arr.reduce((a, b) => a + b)
                return (
                    <tfoot key={row.id}>
                        <tr>
                            <td>Suma: {sum}</td>
                        </tr>
                    </tfoot>
                )
            }
        });
    }
}

export default TableFooter;