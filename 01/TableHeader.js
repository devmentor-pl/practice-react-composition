import React from "react";

const TableHeader = props => {
    const {data} = props;
    const headers = Object.keys(data[0]);

    return (
        <thead>
            <tr>
                {headers.map((el, i) => (
                    <th key={i}>{el}</th>
                ))}
                <th>price for item</th>
            </tr>
        </thead>
    )
}

export default TableHeader;