import React from 'react';


class TableFooter extends React.Component {
    render() {
        const { price } = this.props;

        return (
            <tfoot>
                <tr>
                    <td>Suma: {price}</td>
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter;