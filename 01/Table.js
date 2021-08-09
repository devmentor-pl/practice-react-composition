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
            <th>Łączny koszt</th>
        </tr>
    );
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
            Do zapłaty: {props.totalPrice}
        </footer>
    )
}


class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);

        const tableRow = data.map(item => {
            return <TableRow name={item.name} price={item.price} quantity={item.quantity} />
        });


        const totalPrice = data.reduce((price, item) => {
            return price + item.price * item.quantity;
        }, 0);

        return (<table>
            <TableHeader />
            <TableBody list={tableRow} />
            <TableFooter totalPrice={totalPrice} />
        </table>
        );
    }
}

export default Table;
