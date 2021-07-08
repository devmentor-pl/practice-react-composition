import React from "react";
import ReactDOM from "react-dom";

import Textarea from "./Textarea";

class App extends React.Component {
  state = {
    text: "",
  };

  handleTextChange = (text) => {
    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return <Textarea content={text} onTextChange={this.handleTextChange} />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
