import React from "react";
import ReactDOM from "react-dom";

import File from "./File";
import List from "./List";

class App extends React.Component {
    state = {
        filesList: [],
    };

    changeState = (newFile) => {
        this.setState((state) => ({
            filesList: [...state.filesList, newFile],
        }));
    };

    render() {
        return (
            <section>
                <File addFile={this.changeState} />
                <List list={this.state.filesList} />
            </section>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
