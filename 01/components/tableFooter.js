import React from 'react';

export default class TableFooter extends React.Component {
    render() {
        const style = {backgroundColor:'red', textAlign: 'center'}
        return (
            <tfoot>
                <tr>
                    <td style={style} colSpan='4'>TOTAL : {this.props.data}</td>
                </tr>
            </tfoot>
        )
    }
}