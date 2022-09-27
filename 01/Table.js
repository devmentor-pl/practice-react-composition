import React from "react";
import TableHeader from "./components/TableHeader";
import TableBody from './components/TableBody'
class Table extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data[0]);
    return (
      <table>
        <TableHeader headerNames={this.setHeader()}/>
        <TableBody bodyData={this.setBody()}/>
      </table>
    );
  }
  setHeader(){
    const { data } = this.props;
    return [...Object.keys(data[0]), 'total price']
  }
  setBody(){
    const {data} = this.props;
    return [...Object.keys(data[0])]
  }

}

export default Table;
