import React from 'react'

import TableRow from './TableRow'

class TableBody extends React.Component {
    render () {
       const {products} = this.props;
       console.log(products);

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