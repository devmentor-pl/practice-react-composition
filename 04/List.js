import React from 'react';

class List extends React.Component {
    render() {
        const {data} = this.props;

        if(data.length > 0) {
            return data.map((file) =>{
                return (
                    <ul key={file.uuid}>
                        <li>
                            <header>{file.name}
                                <p>Size: {file.size}</p>
                            </header>
                            <p>{file.text}</p>
                        </li>
                    </ul>
                )
            })
        }
        return <ul>You didn't upload any file</ul>
    }
}

export default List;