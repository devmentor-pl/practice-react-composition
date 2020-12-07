import React from 'react';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        const headerList = Object.keys(data[0]).map(key => {

            return (
                <td key={key}>{key}</td>
            )
        })

        const tableRow = data.map(row => {
            return (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                    <td>{row.quantity}</td>
                </tr>
            )
        })

        const totalSum = data.reduce((acc, item) => {
            return acc + item.price * item.quantity}, 0)

        return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    {headerList}
                </tr>
            </thead>

            <tbody>
                    {tableRow}
            </tbody>

            <tfoot>
                <tr>
                    <td>
                        {totalSum}
                    </td>
                </tr>
            </tfoot>

        </table>
        )
    }
}

const tableStyle = {
    "border": "1px solid black",
    "borderSpacing": "10px",
}

export default Table;
