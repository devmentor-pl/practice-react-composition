import React from 'react';

export const TableHeader = (props) => {
    const { headers } = props

    const headersNames = Object.keys(headers).map(item => {
        return <th style={{
            border: '1px solid black',
        }}>{item.toUpperCase()}</th>
    })

    return (
        <>
            <tr>
                {headersNames}
                <p style={{
                    border: '1px solid black',
                    display: 'table-cell'
                }}>TOTAL</p>
            </tr>
        </>
    )
}

export default TableHeader