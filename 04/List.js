import React from 'react';
import { v4 as uuid } from'uuid';
class List extends React.Component {


   
 render() {    const list = this.props.files.map(el => {

    return <> <li key = {uuid()}> Name: {el.name}</li>
     <li key = {uuid()}> Size: {el.size}</li>
       <li key = {uuid()}> Content: {el.content}</li></>
})
        return <ul>{list}</ul>
    }
}

export default List;