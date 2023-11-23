'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

import './styles/main.css';

class App extends React.Component {
  state = {
    filesList: [],
  };

  handleFileUpload = (fileData) => {
    this.setState((prevState) => ({
      filesList: [...prevState.filesList, fileData],
    }));
  };

  render() {
    return (
      <section>
        <File onFileUpload={this.handleFileUpload} />
        <List files={this.state.filesList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
