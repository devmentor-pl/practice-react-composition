import React from 'react';

export default class TableHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quatity</th>
                </tr>
            </thead>
        )
    }
}