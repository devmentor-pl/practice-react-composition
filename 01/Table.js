import React from 'react';
import TableHeader from './Components/TableHeader'
import TableBody from './Components/TableBody'
import TableFooter from './Components/TableFooter'

class Table extends React.Component {
    render() {
        const {data} = this.props;
        const headerList = Object.keys(data[0]).map(key => {
            return <th key={key}>{key}</th>;
        })

        const totalBasketSum = data.reduce((acc, item) => {
            return acc + item.price * item.quantity}, 0)

        return (
        <table style={tableStyle}>
            <TableHeader headerList={headerList}/>
            <TableBody data={data} />
            <TableFooter totalBasketSum={totalBasketSum} />
        </table>
        )
    }
}

const tableStyle = {
    "border": "1px solid black",
    "borderSpacing": "10px",
}

export default Table;
