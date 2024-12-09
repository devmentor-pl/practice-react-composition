import React from "react";
import { createRoot } from "react-dom/client";

import Textarea from "./Textarea";

class App extends React.Component {
  state = {
    text: "",
  };

  changeValue = (content) => {
    this.setState({
      text: content,
    });
  };

  render() {
    const { text } = this.state;
    return <Textarea handleChange={this.changeValue} content={text} />;
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
