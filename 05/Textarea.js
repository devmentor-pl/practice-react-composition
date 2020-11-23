import React from "react";

class Textarea extends React.Component {
  extraHeightOffset = 20;

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { offsetHeight } = this.textArea;
    const shouldResize = offsetHeight + this.extraHeightOffset < 100;

    return {
      resize: shouldResize,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { offsetHeight, scrollHeight } = this.textArea;
    const shouldResize = offsetHeight < scrollHeight;

    if (shouldResize && snapshot.resize) {
      this.textArea.style.height = offsetHeight + this.extraHeightOffset + "px";
    }
  }

  render() {
    const { content } = this.props;

    return (
      <textarea
        ref={(node) => (this.textArea = node)}
        value={content}
        onChange={(e) => this.props.onTextChange(e.target.value)}
      ></textarea>
    );
  }
}

export default Textarea;
