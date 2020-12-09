import React from 'react';
import ListItem from './ListItem'

class List extends React.Component {
    render() {
        const { files } = this.props;
        const filesList = files.map(file => {
            return (
                <ListItem 
                    key={ file.id }
                    data={ file }
                />
            )
        })
        return (
            <ul>
                { filesList }
            </ul>
        )
    }
}

export default List;