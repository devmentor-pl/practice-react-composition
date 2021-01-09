import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
  state = {
    filesList: [],
  };

  readFile = () => {
    console.log('READ');
    console.log(this.fileRead.files);
  };

  render() {
    return (
      <section>
        <File
          uploaded={this.readFile}
          ref={(element) => (this.fileRead = element)}
        />
        {/*   <input
          type='file'
          multiple
          ref={(element) => (this.fileRead = element)}
          onChange={this.readFile}
        /> */}
        <List />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
