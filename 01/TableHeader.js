import React from 'react';

export const TableHeader = (props) => {
    const { headers } = props

    const headersKey = Object.keys(headers)

    headersKey.map(item => {
        return <th style={{border: '2px solid black'}}>{item.toUpperCase()}</th>
    })

    return (
        <>
            <tr>
                {headersKey}
                <p style={{
                    border: '1px solid black',
                    display: 'table-cell'
                }}>TOTAL</p>
            </tr>
        </>
    )
}

export default TableHeader