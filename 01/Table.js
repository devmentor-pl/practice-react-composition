import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);

        const totalPriceArray = data.map(element => {
            return (
                parseInt(element.price) * parseInt(element.quantity)
            )
        })

        return (
            <table>
                <tbody>
                <tr>
                    {data.map(element => {
                        return (

                            <TableHeader name={element.name} price={element.price} />

                        )
                    })}
                </tr>
                <tr>
                    <TableBody data={data} />
                </tr>

                <tr>
                    <TableFooter totalPriceArray={totalPriceArray} />
                </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;
