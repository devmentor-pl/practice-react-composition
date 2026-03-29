import React from "react";

class Textarea extends React.Component {
  componentDidMount() {
    this.textarea.style.height =
      Math.min(this.textarea.scrollHeight, 100) + "px";
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      if (this.textarea.offsetHeight < this.textarea.scrollHeight) {
        return { resize: true };
      }
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.textarea.style.height = "auto";
      this.textarea.style.height =
        Math.min(this.textarea.scrollHeight, 100) + "px";
    }
  }

  render() {
    return (
      <textarea
        name="textarea"
        ref={(node) => (this.textarea = node)}
        value={this.props.value}
        onChange={this.props.onChange}
        style={{
          minHeight: "20px",
          maxHeight: "100px",
          resize: "none",
          overflow: "hidden",
        }}
      />
    );
  }
}

export default Textarea;
