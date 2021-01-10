import React from 'react';
import {v4 as uuid} from 'uuid';

class List extends React.Component {



    render() {
        const {files} = this.props;

        const filesList = files.map((file) => {
        
            return (
         
                    <li key={uuid()} > 
                    <span>Name: {file.name} </span>
                    <span>Size: {file.size} </span>
                    <span>Content: {file.content} </span>
                    </li>
                
            )
        })




        return <ul>{filesList}</ul>
    }
}

export default List;