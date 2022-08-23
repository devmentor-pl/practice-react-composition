import React from 'react';
import TableHeader from './Components/TableHeader';
import TableFooter from './Components/TableFooter';
import TableBody from './Components/TableBody';

class Table extends React.Component { 

    getHeadersName() {                 
        if (this.props.data.length === 0) return false;
        return Object.keys(this.props.data[0]);
    }

    getTotalPrice() {
        const {data} = this.props;
        return data.reduce((acc, row) => acc + row.price*row.quantity, 0)
    }    

    render() {
        const {data} = this.props;        
                
        return (        
            <table>
                <TableHeader headers = { this.getHeadersName() }/>
                <TableBody data = { data }/> 
                <TableFooter totalPrice = { this.getTotalPrice() } />
            </table>
        )
    }
}

export default Table;
