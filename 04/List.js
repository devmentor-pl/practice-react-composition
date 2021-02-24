import React from 'react';

class List extends React.Component {
    render() {
        const {list} = this.props

        return <ul>Lista plików
            {list}
        </ul>
    }
}

export default List;