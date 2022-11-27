import React from 'react'

class TableRow extends React.Component {

    render() {
        const { items } = this.props
        return (
            <tr key={items.map(e=>e.id)}>
                {items.map((e, index) => <td key={index}>{e}</td>)}
            </tr>
        )
    }
}

export default TableRow