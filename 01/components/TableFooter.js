import React from "react";

export default class TableFooter extends React.Component {
    render() {
        const { footerData: {totalPrice , totalPriceID , footerText, footerTexID} } = this.props;

        return (
            <tfoot>
                <tr>
                    <td className='column summary' colSpan='3' key={footerTexID} > {footerText} </td>
                    <td className='column summary' colSpan="1" key={totalPriceID} > {totalPrice} </td>
                </tr>
            </tfoot>
        )
    }
}