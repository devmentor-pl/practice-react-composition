import React from "react";

class Textarea extends React.Component {
    state = {
        input: "",
    };

    handleChange = (e) => {
        /*console.log(this.input.value);*/
        this.setState({ input: e.target.value });
        this.updateState(e.target.value);
    };

    render() {
        const { updateState } = this.props;
        console.log(updateState);
        return (
            <textarea
                defaultValue={this.state.input}
                /*ref={(node) => (this.input = node)}*/
                onChange={this.handleChange}
            ></textarea>
        );
    }
}

export default Textarea;
