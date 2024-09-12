import React from 'react'

class TableFooter extends React.Component {
    render() {
        const { items } = this.props
        return (
            <>
                <tfoot>
                    <tr>
                        {items.map((e, index) => <td key={index}>{e}</td>)}
                    </tr>
                </tfoot>
            </>
        )
    }
}

export default TableFooter