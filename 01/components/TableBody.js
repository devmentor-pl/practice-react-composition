import React from 'react'
import Table from '../Table';
import TableRow from './TableRow'

class TableBody extends React.Component {
    render () {
       const {products} = this.props;

       const items = products.map(product => {
           return (
               <TableRow {...product}/>
           )
       });

       return (
           <tbody>
               {items}
           </tbody>
       )
    }
}

export default TableBody;