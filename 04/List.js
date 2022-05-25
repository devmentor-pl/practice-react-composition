import React from 'react';

class List extends React.Component {
    createElements = () => {
        return this.props.filesList.map((item) => {
            return <li key={item.id}>{item.content}</li>
        })
    }

    render() {
        return <ul>{this.createElements()}</ul>
    }
}

export default List;