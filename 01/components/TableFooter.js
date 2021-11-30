import React from 'react';


export default class TableFooter extends React.Component {
    render() {
        const {price} = this.props;
        return (
            <tfoot>
                <tr> 
                    <th>{price}</th>
                </tr>
            </tfoot>
        )
    }
}