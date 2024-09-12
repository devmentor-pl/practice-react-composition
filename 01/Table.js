import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableRow from './TableRow';
import TableDataCell from './TableDataCell';
import TableHeaderCell from './TableHeaderCell';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        const totalPrice = data.reduce(function(acc, obj){
            return acc + obj.price * obj.quantity
        }, 0)

        return (
            <table>
                <TableHeader>
                    <TableHeaderCell title={'Item'}/>
                    <TableHeaderCell title={'Amount'}/>
                    <TableHeaderCell title={'Price'}/>
                </TableHeader>
                <TableBody data={data}>
                    {data.map(element => {
                        return (
                            <TableRow key={element.id}>
                                <TableDataCell data={element.name}/>
                                <TableDataCell data={element.quantity}/>
                                <TableDataCell data={element.price}/>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableHeaderCell title={'Total price'}/>
                        <TableDataCell/>
                        <TableDataCell data={totalPrice}/>
                    </TableRow>
                </TableFooter>
            </table>
        )
    }
}

export default Table;
