import React from "react";
import ReactDOM from "react-dom";

import Textarea from "./Textarea";

class App extends React.Component {
  state = {
    text: "",
  };

  render() {
    const { text } = this.state;
    return <Textarea onChange={this.updateState} />;
  }

  updateState = (text) => {
    this.setState({ text });
  };

  
}

ReactDOM.render(<App />, document.querySelector("#root"));
