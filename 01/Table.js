import React from 'react';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
        <table>
            <TableHeader headers={['ID', 'Nazwa', 'Cena', 'Ilość', 'Suma']}/>
            <TableBody >{this.renderBody()}</TableBody>
            <TableFooter totalPrice={this.getTotalPrice(data)}/>
        </table>
        )
    }

    renderBody() {
        const {data} = this.props;
        return (
            data.map(data => { 
                return (
                 <TableRow key={data.id} id={data.id} name={data.name} price={data.price} quantity={data.quantity}/>
                )
            }
       )
   )}

   getTotalPrice(items) {
       let totalPrice = 0
       
       items.map(item => {
           totalPrice += item.price * item.quantity
       })
       return totalPrice
   }       
   
}

export default Table;
