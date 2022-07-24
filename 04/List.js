import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class List extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <ul>
                {data.map(element => {
                    return <li key={uuidv4()}>
                                <header>{element.name}</header>
                                <span>sieze: {element.size}</span>
                                <p>{element.txt}</p>
                            </li>})}
            </ul>
        )
    }
}

export default List;