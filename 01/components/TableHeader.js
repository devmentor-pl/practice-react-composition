import React from 'react';

export default class TableHeader extends React.Component {
    render() {
        const {colNames} = this.props;

        return (
            <thead>
                <tr>
                    {colNames.map(name=><th key={name}>{name}</th>)}
                </tr>
            </thead>
        )
    }
}