import React from "react";

const TableHeader = props => {
    const {names} = props;
    const namesList = names.map(name => {
        return (
            <th key={name}>{name}</th>
        )
    })
    return (
        <thead>
            <tr>
                {namesList}
            </tr>
        </thead>
    )
}

export default TableHeader;