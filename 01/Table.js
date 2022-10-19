import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';


class Table extends React.Component {
    render() {
        const {data} = this.props;
        const {id, ...rest} = data[0];
        const titles = Object.keys(rest);
        const totalPrice = data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

        return <table>
            <TableHeader titles={titles}/>
            <TableBody item={data}/>
            <TableFooter price={totalPrice}/>
        </table>
    }
}

export default Table;
