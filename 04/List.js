import React from 'react';
import {v4 as uuid} from 'uuid';

class List extends React.Component {
    render() {
        const {items} = this.props
        const copyItems = items.map(el=>{
            return {...el, id:uuid()}
        })
        return <ul>{
                copyItems.map(({name, size,id})=><li key={id}>{`${name}: ${size}kB`}</li>)
            }</ul>
    }
}

export default List;