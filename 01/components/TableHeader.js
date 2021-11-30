import React from 'react'

const TableHeader = props => {
    const {titles} = props
    return (
        <thead>
             <tr>
               {titles.map(el=> <th>{el}</th>)}
            </tr>
        </thead>
    )
}

export default TableHeader;