import React from 'react';

export default class TableHeader extends React.Component {
    render () {
        return (
            <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Cena</th>
                    <th>Ilość</th>
                    <th>Suma</th>
                </tr>
            </thead>
        )
    }
}
