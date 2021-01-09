import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
  state = {
    text: '',
  };

  textUpdate = () => {
    console.log(this.textRef.getText());
  };

  render() {
    const { text } = this.state;
    return (
      <Textarea
        content={text}
        ref={(ref) => (this.textRef = ref)}
        changed={this.textUpdate}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
