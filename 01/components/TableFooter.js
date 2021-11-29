import React from 'react';

export default class TableFooter extends React.Component {
    render() {
        const { price } = this.props;
        return (
            <tfoot>
                <tr>
                    <td colSpan={4}>
                        {price}
                    </td>
                </tr>
            </tfoot>
        );
    };
};