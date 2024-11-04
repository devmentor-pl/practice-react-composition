import React from "react";

class Textarea extends React.Component {
  getSnapshotBeforeUpdate() {
    const offsetHeight = this.textarea.offsetHeight;

    return offsetHeight < 100 ? { resize: true } : { resize: false };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.textarea.offsetHeight < this.textarea.scrollHeight &&
      snapshot.resize
    ) {
      this.textarea.style.height = this.textarea.offsetHeight + 11 + "px";
    }
  }
  render() {
    const { content, handleChange } = this.props;
    return (
      <textarea
        ref={(node) => (this.textarea = node)}
        value={content}
        onChange={handleChange}
      ></textarea>
    );
  }
}

export default Textarea;
