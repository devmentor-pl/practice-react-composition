import React from "react";
import { createRoot } from "react-dom/client";

import Textarea from "./Textarea";

class App extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      text: value,
    });
  };

  render() {
    const { text } = this.state;
    return <Textarea handleChange={this.handleChange} content={text} />;
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
