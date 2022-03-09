import React, { useReducer } from 'react';

class Table extends React.Component {

    renderProductName() {
        const {data} = this.props;
        return data.map(item => <tr>{item.name}</tr>)
    }

    renderQuantity(){
        const {data} = this.props;
        return data.map(item => <tr>{item.quantity}</tr>)
    }

    renderPrice(){
        const {data} = this.props;
        return data.map(item => <tr>{item.price}</tr>)
    }

    renderTotalPrice(){
        const{data} = this.props;
        return data.map(item => <tr>{item.price * item.quantity}</tr>)
    }

    render() {
        const {data} = this.props;
        console.log(data);
        return (
            <table>
                <thead>
                    <tr>
                        <th>Produkt................................</th>
                        <th>Ilość..................................</th>
                        <th>Cena...................................</th>
                        <th>Suma...................................</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.renderProductName()}</td>
                        <td>{this.renderQuantity()}</td>
                        <td>{this.renderPrice()}</td>
                        <td>{this.renderTotalPrice()}</td>
                    </tr>

                </tbody>
                <tfoot><tr></tr></tfoot>
            </table>
        )
    }
}

export default Table;
