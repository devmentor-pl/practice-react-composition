import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
  state = {
    filesList: [],
  };

  saveFileIntoState = () => {
    const uploadedFiles = this.fileReader.uploadedFiles();

    uploadedFiles.map((file) => {
      if (file && file.type.includes('text')) {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = () => {
          const fileToPushIntoState = {
            name: file.name,
            content: reader.result,
            size: file.size,
          };

          this.setState({
            filesList: [...this.state.filesList, fileToPushIntoState],
          });
        };
      }
    });
  };

  render() {
    return (
      <section>
        <File
          ref={(element) => (this.fileReader = element)}
          changed={this.saveFileIntoState}
        />
        <List elements={this.state.filesList} />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
