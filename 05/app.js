import React from "react";
import { createRoot } from "react-dom/client";

import Textarea from "./Textarea";

class App extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const content = e.target.value;
    this.setState({ text: content });
  };

  render() {
    const { text } = this.state;
    return <Textarea value={text} onChange={this.handleChange} />;
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
