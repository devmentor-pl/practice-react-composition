import React from "react";

export default class TableRow extends React.Component {
    render() {
        const { rowData } = this.props

        return(
            <tr>
                { rowData.map( data => {
                    const value = data[0];
                    const id = data[1];

                    return <td className='column' key={id}> {value} </td>
                })}
            </tr>
        )
    }
}