import React from 'react';

class List extends React.Component {
    render() {
        const { files } = this.props
        return <ul>
            {files.map( ({id,name,size, content}) => <li key={id}>{name}: {content} | {size}</li> )}
            </ul>
    }
}

export default List;