import React from 'react';
import TableHeader from './components/TableHeader';
import TableFooter from './components/TableFooter';
import TableBody from './components/TableBody';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        const [firstRow] = data;
        const {id, ...rest} = firstRow;
        const titles = Object.keys(rest);
        const totalPrice = data.reduce((acc,cur) => acc+ cur.price * cur.quantity, 0);
        return (
            <table>
                <TableHeader titles={titles}/>
                <TableBody item={data}/>
                <TableFooter price={totalPrice}/>
            </table>
        )
    }
}

export default Table;
