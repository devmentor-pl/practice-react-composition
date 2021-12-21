import React from "react";
import { v4 as uuid } from 'uuid';

export default class TableRow extends React.Component {
    render() {
        const { rowContent } = this.props

        return(
            <tr>
                { rowContent.map( row => <td className='column' key={ uuid() }> {row} </td> )}
            </tr>
        )
    }
}