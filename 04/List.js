import React from 'react';

class List extends React.Component {
    render() {
        const { items } = this.props;

        const list = items.map(row => {
            return (
                <React.Fragment key={row.id}>
                    <li>Name: {row.name} - Size: {row.size} bytes - Description: {row.content} </li>
                </React.Fragment>
            )
        });
        return <ul>{list}</ul>
    }
}

export default List;