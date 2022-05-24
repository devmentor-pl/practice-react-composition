import React from 'react';
import {TableHeader, TableBody, TableFooter} from './components/index';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        const footerData = data.reduce((ac, item) => {
            return ac + item.price * item.quantity
        },0);

        return (
            <table>
                <TableHeader/>
                <TableBody data= {data}/>
                <TableFooter data= {footerData}/> 
            </table>
        )
    }
}

export default Table;
