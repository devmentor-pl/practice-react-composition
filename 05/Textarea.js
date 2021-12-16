import React from "react";

class Textarea extends React.Component {
    state = {
        textareaHeight: "",
    };

    handleChange = (e) => {
        this.props.updateState(e.target.value);
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("snapshot");

        return {
            height: this.refText.offsetHeight,
            scrollHigh: this.refText.scrollHeight,
            resize:
                this.refText.offsetHeight < this.refText.scrollHeight
                    ? true
                    : false,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot.height);
        console.log(this.refText.offsetHeight);
        if (snapshot.resize === true) {
            console.log("needs bigger space");
            const newHeight = this.refText.offsetHeight + 1;
            console.log(newHeight);
            this.setState({ textareaHeight: newHeight });
        }
    }

    render() {
        return (
            <textarea
                style={{ height: this.state.textareaHeight }}
                defaultValue={this.state.input}
                ref={(el) => (this.refText = el)}
                onChange={this.handleChange}
            ></textarea>
        );
    }
}

export default Textarea;
