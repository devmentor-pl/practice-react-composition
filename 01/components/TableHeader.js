import React from 'react';

const TableHeader = props => {
    const { columnName } = props;

    return (
        <thead>
            <tr>
                {
                    columnName.map(
                        n => <th key={n}>{n}</th>
                    )
                }
            </tr>
        </thead>
    )
}

export default TableHeader;