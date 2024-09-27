import React from 'react';
class List extends React.Component {
    render() {
        const { data } = this.props;
        const listItem = data.map(item => <li key={item.id}>Name: {item.name} Size: {item.size} Content: {item.content}</li>)
        return <ul>{listItem}</ul>
    }
}

export default List;