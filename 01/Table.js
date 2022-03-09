import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {

    calcTotalCost(){
        const {data} = this.props;
        return data.reduce((acc,item) => {
            return acc + item.price * item.quantity;
        },0);
    }
    render() {
        const {data} = this.props;
        return (
            <table>
                <TableHeader/>
                <TableBody data={data}/>
                <TableFooter totalCost={this.calcTotalCost()}/>
            </table>
        )
    }
}

export default Table;
