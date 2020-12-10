import React from 'react'

const TableHeader = props => {
    const {headerList} = props;
    return (
        <thead>
                <tr>
                    { headerList }
                </tr>
        </thead>
    )
}

export default TableHeader
