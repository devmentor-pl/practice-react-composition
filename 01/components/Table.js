import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';


class Table extends React.Component {
    render() {
        const tableHeadings = this.setTableHeadings();
        const totalPrice = this.countTotalPrice();
        return (
            <table>
                <TableHeader headings={tableHeadings} />
                <TableBody data={this.props.data} />
                <TableFooter price={totalPrice} />
            </table>
        )
    }

    setTableHeadings() {
        const { data } = this.props;
        const [product] = data;
        const { id, ...productInfo } = product;
        return [...Object.keys(productInfo), 'total price'];
    }

    countTotalPrice() {
        const { data } = this.props;
        return data.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
    }
}

export default Table;
