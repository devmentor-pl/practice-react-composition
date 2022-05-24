import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);
    
        return (
            <table>
                <TableHeader headers={['ID', 'Nazwa', 'Cena', 'Ilość', 'Łącznie']}/>
                <TableBody>
                    {data.map(data => {
                        return (
                            <TableRow id={data.id} name={data.name} price={data.price} quantity={data.quantity}/>
                        )
                    })}
                </TableBody>
                <TableFooter totalPrice={this.getTotalPrice(data)}/>
            </table>
        )
    }

    getTotalPrice(arr) {
        let total = 0;
        
        arr.map(item => {
            total += item.price * item.quantity;
        });

        return total;
    }
}

export default Table;
