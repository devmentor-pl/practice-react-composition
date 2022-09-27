import React from "react";
import TableHeader from "./components/TableHeader";
import TableBody from './components/TableBody'
class Table extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <table>
        <TableHeader headerNames={this.setHeader()}/>
        <TableBody body={data}/>
      </table>
    );
  }
  setHeader(){
    const { data } = this.props;
    return [...Object.keys(data[0]), 'total price']
  }
  setBody(){
    const {data} = this.props
    
  }

}

export default Table;
