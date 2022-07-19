import React from "react";

export default class TableHeader extends React.Component {
    render() {
        const { columnData } = this.props;

        return (
            <thead>
                <tr>
                    {columnData.map( item => {
                        const name = item[0];
                        const id = item[1];

                        return <th className='column' key={id}> {name} </th>
                    })}
                </tr>
            </thead>
        )
    }
}