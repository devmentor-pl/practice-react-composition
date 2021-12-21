import React from 'react';
import TableHeader from './components/TableHeader.js'
import TableBody from './components/TableBody.js'
import TableFooter from './components/TableFooter.js';

export default class Table extends React.Component {
    render() {
        return (
            <table className="table">
                <caption className="title">Products Info</caption>
                <TableHeader columnNames={this.setColumnNames()} />
                <TableBody bodyContent={this.setBodyContent()} />
                <TableFooter totalPrice={this.setTotalPrice()} />
            </table>
        )
    }

    setColumnNames = () => {
        const { data } = this.props;
        const { id , ...names } = data[0];

        return [...Object.keys(names), 'total price'];
    }

    setBodyContent = () => {
        const { data } = this.props;

        const bodyContent = data.map( item => {
            const { id, ...bodyContent } = item;
            const itemPrice = item.price * item.quantity;

            return [...Object.values(bodyContent) , itemPrice];
        });

        return bodyContent;
    }

    setTotalPrice = () => {
        const { data } = this.props;

        return data.reduce( (total, item) => ( total + item.price * item.quantity ), 0);
    }
}

