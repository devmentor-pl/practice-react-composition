import React from 'react'


class TableFooter extends React.Component {
 
    render() {
        const {footerData} = this.props

        return(
            <tfoot>
                <tr>
                    <td>{`Sum of the Products: ${footerData}`}</td>
                </tr>
            </tfoot>
        )
    }
}

export default TableFooter
