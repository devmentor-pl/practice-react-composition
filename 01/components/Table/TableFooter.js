import React from 'react';

const TableFooter = props => {
    const {sum} = props;
      

    return(
        <tfoot>
            <tr>
                <td>Sum</td>
                <td>{sum}</td>
            </tr>
        </tfoot>
    )
}

export default TableFooter;