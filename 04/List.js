import React from 'react';

class List extends React.Component {
    render() {
        const {filesList} = this.props
        const filesContent = filesList.map(file => {
            return <li key={ file.id }>{ `FILE NAME: ${file.fileName} FILE SIZE: ${file.fileSize} BYTES` }</li>
        })

        return <ul>
            { filesContent }
            </ul>
    }
}

export default List;