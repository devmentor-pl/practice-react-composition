import React from "react";
import { v4 as uuid } from 'uuid';

export default class TableHeader extends React.Component {
    render() {
        const { columnNames } = this.props;

        return (
            <thead>
                <tr>
                    {columnNames.map(name => <th className='column' key={uuid()}> {name} </th>)}
                </tr>
            </thead>
        )
    }
}