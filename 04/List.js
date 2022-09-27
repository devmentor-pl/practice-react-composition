import React from 'react';
import {v4 as uuid} from 'uuid';


class List extends React.Component {
    render() {
        const {elements} = this.props;
        const filesList = elements.map(file => {
            return <li key={uuid()}> name={file.name} size={file.size} content={file.content}</li>
        });
        return <ul>{filesList}</ul>
    }
}

export default List;