import React from "react";

class Textarea extends React.Component {
  textAreaRef = React.createRef();

  getSnapshotBeforeUpdate() {
    const textarea = this.textAreaRef.current;
    textarea.style.height = "auto";

    if (textarea.scrollHeight > textarea.offsetHeight) {
      return { resize: true };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const textarea = this.textAreaRef.current;
    if (snapshot?.resize === true) {
      const contentHeight = Math.min(textarea.scrollHeight, 100);
      textarea.style.height = `${contentHeight}px`;
    }
  }

  render() {
    return (
      <textarea
        ref={this.textAreaRef}
        value={this.props.content}
        onChange={this.props.onChange}
      ></textarea>
    );
  }
}

export default Textarea;
