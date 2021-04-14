import React from "react";

class Textarea extends React.Component {
  textAreaRef = React.createRef();

  state = {
    height: 20,
  };

  getSnapshotBeforeUpdate() {
    const { offsetHeight, scrollHeight } = this.textAreaRef.current;
    if (
        offsetHeight <
        scrollHeight &&
        offsetHeight < 100
    ) {
      return { resize: true };
    }

    return { resize: false };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");

    if (snapshot.resize) {
      this.setState({ height: this.textAreaRef.current.scrollHeight });
    }
  }

  render() {
    const { onChange, content } = this.props;
    return (
      <textarea
        value={content}
        onChange={onChange}
        ref={this.textAreaRef}
        style={{ height: this.state.height }}
      ></textarea>
    );
  }
}

export default Textarea;
