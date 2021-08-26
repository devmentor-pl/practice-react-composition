import React from 'react';

import {v4 as uuid} from 'uuid';
import leaveOnlyLastItem from './LeaveOnlyLastItem';
import FileContent from './styles/FileContent';
import numberSeparator from './styles/NumberSeparator';

class List extends React.Component {
    render() {
        const {files} = this.props;
        leaveOnlyLastItem(files);
        const fileData = files.map(file => {
            const {name, size, content} = file;
            return (
                <li key={uuid()}>
                    <p>Filename: <strong>{name}</strong></p>
                    <p>Size: <strong>{numberSeparator(size)} B</strong></p>
                    <article>Content: 
                        <p style={FileContent}>{content}</p>
                    </article>
                </li>
            )
        })
        return (
            <ul>{fileData}</ul>
        )
    }
}

export default List;