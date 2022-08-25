import React from 'react';

export default class TableHeader extends React.Component {
    render() {
        const { headers } = this.props;

        return (
            <thead>
                <tr>
                    { headers.map(name => <th key={ name }>{ name }</th>) }
                </tr>
            </thead>
        )
    }
}