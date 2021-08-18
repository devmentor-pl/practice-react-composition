import React from 'react'

class TableFooter extends React.Component {
    render() {
        const {data} = this.props;

        const sumItem = data.reduce((acc, item) => {
            return acc + item.price;
        }, 0);

        return (
            <tfoot>
                <tr>
                    <td>Suma: {sumItem}</td>
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter;