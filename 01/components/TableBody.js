import React from "react";
import TableRow from "./TableRow";
class TableBody extends React.Component {
  render() {
    const { data } = this.props;
    const row = data.map(item => <TableRow key={item.id} name={item.name} price={item.price}/>)
    const style = {
      backgroundColor: '#e4f0f5'
    }
    return (
       <tbody style={style}>
        {row}
       </tbody>
    )
  }
}

export default TableBody;
