import React from 'react'

import NarrowStringColumn from './styles/NarrowStringColumn';
import WideStringColumn from './styles/WideStringColumn';

class TableHeader extends React.Component {
    render () {
        return (
            <thead>
                <tr>
                    <th style={NarrowStringColumn}>Kod</th>
                    <th style={WideStringColumn}>Nazwa</th>
                    <th style={NarrowStringColumn}>Cena jednostkowa</th>
                    <th style={NarrowStringColumn}>Ilość</th>
                    <th style={NarrowStringColumn}>Cena całkowita</th>
                </tr>
            </thead>
        )
    }
}

export default TableHeader