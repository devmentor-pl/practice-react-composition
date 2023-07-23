import React from 'react';

class List extends React.Component {
    render() {
        const { filesList } = this.props
        return (
            <ul>
            {
                filesList.map(file => {
                    const {name, size, body, id} = file
                    return (
                    <li key={id}>
                        {name} size: {size}B fileContent: {body}
                    </li>
                    )
                })
            }
        </ul>
        )
    }
}

export default List;