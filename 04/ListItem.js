import React from 'react';

class ListItem extends React.Component {
    render () {
        const { data } = this.props;
        const { name, type, size } = data;
        return (
            <li>Nazwa: { name }, typ: { type }, wielkość: { size } kB</li>
        )
    }
}

export default ListItem;