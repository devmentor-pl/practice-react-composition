import React from 'react';
import TableHeader from './components/TableHeader.js'
import TableBody from './components/TableBody.js'
import TableFooter from './components/TableFooter.js';
import { v4 as uuid } from 'uuid';

export default class Table extends React.Component {
    render() {
        return (
            <table className="table">
                <caption className="title">Products Info</caption>
                <TableHeader columnData={this.setColumnData()} />
                <TableBody bodyData={this.setBodyData()} />
                <TableFooter footerData={this.setFooterData()} />
            </table>
        )
    }

    setColumnData = () => {
        const { data } = this.props;
        const { id , ...names } = data[0];

        const columnNames = [...Object.keys(names) , 'total price'];

        const columnData = columnNames.map( name => {
            const nameId = uuid();
            return [ name , nameId ];
        });

        return columnData;
    }

    setBodyData = () => {
        const { data } = this.props;

        const bodyData = data.map( item => {
            const { id, ...bodyContent } = item;
            const itemPrice = item.price * item.quantity;

            const itemValues = [...Object.values(bodyContent) , itemPrice];

            const bodyItem = itemValues.map( item => {
                const itemId = uuid();
                return [ item , itemId ];
            });

            const bodyItemID = uuid();
            return [ bodyItem , bodyItemID ];
        });
        return bodyData;
    }

    setFooterData = () => {
        const { data } = this.props;

        const totalPrice = data.reduce( (total, item) => ( total + item.price * item.quantity ), 0);
        const footerText = 'Total Price of all items:'

        return {
            totalPrice: totalPrice,
            totalPriceID: uuid(),
            footerText: footerText,
            footerTextID: uuid()
        }
    }
}

