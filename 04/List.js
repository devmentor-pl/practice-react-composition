import React from 'react';

class List extends React.Component {
  render() {
    const { elements } = this.props;
    const renderFileList = elements.map((el) => {
      return (
        <li key={el.name}>
          <p>Nazwa: {el.name}</p>
          <p>Zawartość: {el.content}</p>
          <p>Rozmiar: {el.size} B</p>
        </li>
      );
    });

    return (
      <>
        <p>Lista plików: </p>
        <ul>{renderFileList}</ul>
      </>
    );
  }
}

export default List;
