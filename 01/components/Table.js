import React from "react";
import TableHeader from './TableHeader';
import TableBody from "./TableBody";
import TableFooter from './TableFooter'
class Table extends React.Component {
  render() {
    const { data } = this.props;
    const style = {
        borderCollapse: 'collapse',
        border: '2px solid rgb(200, 200, 200)',
        letterSpacing: '1px',
        fontFamily: 'sans-serif',
        fontSize: '0.8rem'
    }
    return (
      <table style={style}> 
        <TableHeader />
        <TableBody data={data}/>
        <TableFooter data={data}/>
      </table>
    );
  }
}

export default Table;
