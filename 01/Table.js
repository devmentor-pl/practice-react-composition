import React from 'react';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import TableRow from './components/TableRow';
import TableFooter from './components/TableFooter';

class Table extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    const renderRows = data.map((dataItem) => {
      return (
        <TableRow
          name={dataItem.name}
          price={dataItem.price}
          quantity={dataItem.quantity}
          key={dataItem.name}
        />
      );
    });

    return (
      <table>
        <TableHeader />
        <TableBody products={data}>{renderRows}</TableBody>
        <TableFooter products={data} />
      </table>
    );
  }
}

export default Table;
