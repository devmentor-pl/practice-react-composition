import React from 'react';
import {TableHeader, TableBody, TableFooter} from './index'

class Table extends React.Component {
    render() {
        const tableStyles = {
            backgroundColor: 'lightgrey',
            textAlign: 'center',
            border: 'black solid 1px'
        }
        const {data} = this.props;
        const totalPrice = data.reduce((price, item) => {
            return price + item.price * item.quantity
            },0);
        return (
            <table style={tableStyles}>
                <TableHeader 
                    item={'Item'}
                    price={'Price'}
                    quantity={'Quantity'}
                    total={'Item Price'} />
                <TableBody data = {data}/>
                <TableFooter totalPrice = {totalPrice}/> 
            </table>
        
        )
    }
}

export default Table;






