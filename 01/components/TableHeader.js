import React from 'react';

export default class TableHeader extends React.Component {
    render() {
        const { headings } = this.props;
        return (
            <thead>
                <tr>
                    {headings.map((title, index) => <th key={index} scope='col'>{title}</th>)}
                </tr>
            </thead>
        );
    };
};