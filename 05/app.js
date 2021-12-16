import React from "react";
import ReactDOM from "react-dom";

import Textarea from "./Textarea";

class App extends React.Component {
    state = {
        text: "",
    };

    updateState = (input) => {
        this.setState({ text: input });
    };

    render() {
        const { text } = this.state;
        return <Textarea content={text} updateState={this.updateState} />;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
