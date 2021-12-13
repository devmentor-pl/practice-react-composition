import React from "react";

class Textarea extends React.Component {
  state = {
    height: 50,
  };

  render() {
    return (
      <textarea
        style={{ height: this.state.height + "px" }}
        onChange={this.onChangeHandler}
        ref={(el) => (this.textAreaRef = el)}
      ></textarea>
    );
  }

  onChangeHandler = () => {
    const { onChange } = this.props;
    onChange(this.textAreaRef.value);
  };

  getSnapshotBeforeUpdate = () => {
    const { offsetHeight, scrollHeight } = this.textAreaRef;
    return offsetHeight < scrollHeight && offsetHeight <= 100
      ? { resize: true }
      : { resize: false };
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    const { scrollHeight } = this.textAreaRef;
    if (snapshot.resize) {
      this.setState({ height: scrollHeight });
    }
  };
}

export default Textarea;
