import React from 'react';
import {v4 as uuid} from 'uuid';

class List extends React.Component {
    render() {
        return <ul>{ this.renderList() }</ul>
    }

    renderList() {
            const {itemList} = this.props
    
            return itemList.map(file => {
                return (
                    <li key={file.id}>
                        <h2>File name: {file.name}</h2>
                        <p>File size: {file.size} B</p>
                        <p>File content: {file.content}</p>
                    </li>
                )
            })
    }
}


export default List;