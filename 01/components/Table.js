import React from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody';
import TableFooter from './TableFooter'
import '../index.css'

class Table extends React.Component {
    
    render() {
        const { data } = this.props;
        console.log(data);
      

        const items = ["name", "price", "quality", "total Price" ]

        const totalPrice = data.reduce((price, item) => {
            return price + item.price * item.quality;
        }, 0)

      

        return (   
            <table className="table">
                 <TableHeader items = { items }/>
                 <TableBody data = { data } />
                 <TableFooter totalPrice = {totalPrice} /> 
            </table>
        )
        
     
    }
}

export default Table;
