import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const styles = {
    border: "1px solid black",
    textAlign: "left",
    padding: "1rem",
};

class Table extends React.Component {
    getPrices = (data) => {
        const prices = [];
        data.forEach((obj) => {
            const price = obj.price * obj.quantity;
            prices.push(price);
        });
        return prices;
    };

    render() {
        const { data } = this.props;

        return (
            <table style={styles}>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    <TableBody data={data} />
                </tbody>
                <tfoot>
                    <TableFooter prices={this.getPrices(data)} />
                </tfoot>
            </table>
        );
    }
}

export default Table;
