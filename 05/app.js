import React from "react";
import ReactDOM from "react-dom";

import Textarea from "./Textarea";

class App extends React.Component {
  state = {
    text: "",
  };

  readTextarea = (textContent) => {
    console.log(textContent);
    this.setState((state) => {
      return { text: textContent };
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      heightBox: this.refTextarea.getHeight(),
      heightScroll: this.refTextarea.getScrollHeight(),
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.refTextarea.getHeight() < this.refTextarea.getScrollHeight()) {
      this.refTextarea.area.style.height =
        this.refTextarea.getScrollHeight() + 15 + "px";

      this.refTextarea.area.style.maxHeight = "100px";
    }
  }

  render() {
    return (
      <Textarea
        readContent={this.readTextarea}
        ref={(el) => (this.refTextarea = el)}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
