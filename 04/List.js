import React from 'react';
import ListItem from './ListItem';


class List extends React.Component {


    render() {
        const {filesList} = this.props;
        const listItems = filesList.map(file =>{
            const {id,name,size,content} = file;
            return <ListItem key={id} name={name} size={size} content={content} />
        });

        return <ul>{listItems}</ul>
    }
}

export default List;