import React from 'react';

const TableFooter = (props) => {

    const {data} = props;

    const sumItem = data.reduce((acc, item) => {
        return acc + item.price;
    }, 0);

    return(
        <tfoot>
            <tr>
                <td>The sum is</td>
                <td>{sumItem}</td>
            </tr>
        </tfoot>
    )
}


export default TableFooter;
