import React from "react";
import { createRoot } from "react-dom/client";

import Textarea from "./Textarea";

class App extends React.Component {
  state = {
    text: "",
  };

  addToState = (input) => {
    this.setState({ text: input });
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    const { scroll, height } = this.refTextarea.getHeightAndScroll();
    const resize = scroll > height;
    return { resize, scroll };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { resize, scroll } = snapshot;
    if (resize) {
      this.refTextarea.setHeight(scroll);
    }
  }

  render() {
    const { text } = this.state;
    return (
      <Textarea
        content={text}
        updateState={this.addToState}
        ref={(el) => (this.refTextarea = el)}
      />
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
