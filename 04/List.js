import React from 'react';

class List extends React.Component {
    render() {
        const {data} = this.props;
        const fileList = data.map(item=> {
            return (
                <ul>
                    <li key={item.id}>
                        <span>name: {item.name} </span>
                        <p>size: {item.size}</p>
                        <p>content: {item.txt}</p>
                    </li>
                </ul>
            ) 
        })
    }
}

export default List;