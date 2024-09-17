import React from 'react';

class List extends React.Component {
    showList = () => {
        const { data } = this.props;
        return (data.map((file) => (
            <li key={file.id}>
                <p>name:{file.name}</p>
                <p>size:{file.size}</p>
                <p>content:{file.content}</p>
            </li>
        )))
    }
    render() {
        return <ul>{this.showList()}</ul>
    }

}

export default List;