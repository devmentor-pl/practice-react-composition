import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
  state = {
    text: "",
  };


  insertText = (txt) => {
    this.setState({
        text: txt
    }
    )
  }

  render() {
    const { text } = this.state;

    console.log("---->",text);
    return <Textarea textChange={this.insertText} content={text} />;
  }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
