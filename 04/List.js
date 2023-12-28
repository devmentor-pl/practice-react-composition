import React from 'react';

class List extends React.Component {
    render() {
        // Pobieram pliki przekazane do komponentu jako props
        const { files } = this.props;
        // Renderuje liste plikow
        return (
            <ul>
                {/* Mapuje kazdy plik do elementu listy */}
                {files.map(file => (
                    <li key={file.id}> 
                        <strong>{file.name}</strong> - {file.size} bytes
                        <div>{file.content}</div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;