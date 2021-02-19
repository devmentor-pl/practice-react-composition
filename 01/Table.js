import React from 'react';

const TableRow = props => {
    return (
            <tr>
                <td>{props.name} </td>
                <td>{props.price} </td>
                <td>{props.quantity} </td>
                <td>{props.quantity * props.price} </td>
            </tr>
    )
}

const TableHeader = props => {
    return (
            <tr>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Łączna cena</th>
            </tr>
    )
}

const TableBody = props => {
    return (
        <>
            {props.list}
        </>
    )
}

const TableFooter = props => {
    return (
        <footer>
            Koszt zamówienia: {props.totalPrice}
        </footer>
    )
}
class Table extends React.Component {
    
    render() {
        const {data} = this.props;
        
        const rows = data.map(item => {

           return <TableRow name={item.name} price={item.price} quantity={item.quantity}/>
        });

        [data.price] = data;
        const totalProductPrice = data.map(item => {
            return item.price * item.quantity
        })

        const totalPrice = totalProductPrice.reduce((a, b) => {
            return a + b
        })
        console.log(totalPrice)
        return <table>
            <TableHeader/>
            <TableBody list={rows}/>
            <TableFooter totalPrice={totalPrice}/>
        </table>
    }
    
}
//""`<TableHeader />` - zawiera nazwy pól wraz z informacją o kwocie do zapłaty" - rozumiem ze chodzi o laczna kwote, wiec to pominalem, bo cos takiego mamy w footer, no chyba ze cos zle zrozumialem
export default Table;
