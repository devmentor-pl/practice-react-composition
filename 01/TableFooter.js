import React from 'react'

class TableFooter extends React.Component {
    render() {
        const {orderValue} = this.props
        const style = {backgroundColor: 'lightGray'}

        return ( <tfoot style={ style }>
            <tr>
                <td>CENA CAŁKOWITA:</td>
                <td>{ orderValue }</td>
            </tr>
        </tfoot> )
    }
}

export default TableFooter;