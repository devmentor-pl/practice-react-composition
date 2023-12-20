import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
  state = {
    text: '',
  };

  handleChange = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    const { text } = this.state;
    return <Textarea content={text} onChange={this.handleChange} />;
  }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
