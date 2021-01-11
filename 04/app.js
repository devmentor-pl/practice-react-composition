import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
  state = {
    filesList: [],
  };

  saveFileIntoState = () => {
    const fileList = this.fileReader.uploadFiles();
    const filesInStateCopy = [...this.state.filesList];

    fileList.map((file) => {
      this.readFileValue(file);
      filesInStateCopy.push(file);
      this.setState({ filesList: filesInStateCopy });
    });
  };

  readFileValue = (file) => {
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      const content = readerEvent.target.result;
      file.content = content;
    };
    reader.readAsText(file, 'UTF-8');
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
