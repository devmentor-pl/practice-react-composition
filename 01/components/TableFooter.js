import React from "react";
import TableRow from "./TableRow";

class TableFooter extends React.Component {
  render() {
    const { footerData} = this.props;
    return (
      <tfoot>
        <tr>
          
              <TableRow rowData={footerData}></TableRow>
         
        </tr>
      </tfoot>
    );
  }
}
export default TableFooter