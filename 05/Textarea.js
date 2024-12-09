import React from "react";

class Textarea extends React.Component {
  getTextHeight() {
    return this.textarea.offsetHeight;
  }

  getScrollHeight() {
    return this.textarea.scrollHeight;
  }

  componentDidUpdate(props, state, snapshot) {
    if (snapshot.resize && this.getTextHeight() < this.getScrollHeight()) {
      this.textarea.style.height = `${this.getScrollHeight()}px`;
    }
  }

  getSnapshotBeforeUpdate = () => {
    if (this.getTextHeight() < 100) {
      return { resize: true };
    } else {
      return { resize: false };
    }
  };

  render() {
    const { content, handleChange } = this.props;
    return (
      <textarea
        onChange={() => handleChange()}
        ref={(el) => (this.textarea = el)}
        value={content}
      >
        {content}
      </textarea>
    );
  }
}

export default Textarea;
