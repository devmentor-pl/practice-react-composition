import React from "react";

const TableFooter = ({ data }) => {
    const totalSum = data.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

    return (
        <tfoot>
            <tr>
                <td colSpan="3" style={{ textAlign: "left", fontWeight: "bold" }}>Suma:</td>
                <td style={{ fontWeight: "bold" }}>{totalSum}zł</td>
            </tr>
        </tfoot>
    );
};

export default TableFooter;