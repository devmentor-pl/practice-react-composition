import React from 'react';

class List extends React.Component {
    render() {
        const { files } = this.props;
        const filesList = files.map(file => {
            const { name, size, content, id } = file;
            return (
                <li key={id}>
                    <article>
                        <header>
                            <h2>file name: {name}</h2>
                            <p>file size: {size}MB</p>
                        </header>
                        <p>file content:</p>
                        <p>{content}</p>
                    </article>
                </li>
            )
        })
        return <ul>{filesList}</ul>
    }
}

export default List;