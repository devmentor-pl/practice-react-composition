import React from 'react';

export default class TableFooter extends React.Component{
    render() {
        const {data} = this.props;
        const totalPrice = data.reduce((acc, item) => acc + (item.price * item.quantity), 0)

       return <div> Total price is {totalPrice}</div>
    }
}