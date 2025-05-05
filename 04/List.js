import React from 'react';

class List extends React.Component {
    render() {
        const {files} = this.props;

            {if (files.length !==0 ){

                return (
                    <ul>
                        <h2>Lista wgranych plików:</h2>
                        {files.map((file) => (
                            <li key={file.id}>
                                <p>{file.fileName}</p>
                                <p>{file.fileSize}</p>
                                <p>{file.content}</p>
                            </li>
                        ))}

                    </ul>
                )
            }}
            
        
    }
}

export default List;