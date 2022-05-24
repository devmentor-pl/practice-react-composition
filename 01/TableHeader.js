import React from 'react';

const TableHeader = props => {
    const {headers} = props;

    const headerCell = headers.map(name => <th>{name}</th>)

    return (
        <thead>
            <tr>
                {headerCell}
            </tr>
        </thead>
    )
}

export default TableHeader;