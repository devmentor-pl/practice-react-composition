'use strict';
import React from 'react';

class List extends React.Component {
  render() {
    const { files } = this.props;

    return (
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <div>Name: {file.name}</div>
            <div>Size: {(file.size / 1024).toFixed(2)} KB</div>
            <div>Text: {file.content}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
