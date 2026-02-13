import React from 'react';

class List extends React.Component {
    render() {
        const { files } = this.props;

        return (
            <div className="file-list-container">
                <h2 className="file-list__title">Lista plików</h2>

                {files.length === 0 ? (
                    <p className="file-list__empty">Brak wczytanych plików</p>
                ) : (
                    <ul className="file-list__items">
                        {files.map((file) => (
                            <li key={file.id} className="file-list__item">
                                <h3 className="file-list__name">{file.name}</h3>
                                <pre className="file-list__content">
                                    {file.content}
                                </pre>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default List;
