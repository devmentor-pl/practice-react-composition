import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
  state = {
    text: '',
    height: 16,
  };

  textUpdate = () => {
    let textInTextArea = this.textRef.getText();
    this.setState({ text: textInTextArea });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    let offsetHeight = this.textRef.getOffsetHeight();

    if (offsetHeight < 100) {
      return { resize: true };
    } else {
      return { resize: false };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let offsetHeight = this.textRef.getOffsetHeight();
    let scrollHeight = this.textRef.getScrollHeight();

    let heightCopy = this.state.height;

    if (snapshot.resize && scrollHeight > offsetHeight) {
      this.setState({ height: heightCopy + 8 });
    }
  }

  render() {
    const { text, height } = this.state;
    return (
      <Textarea
        content={text}
        ref={(ref) => (this.textRef = ref)}
        changed={this.textUpdate}
        height={height}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
