import React from "react";

class Textarea extends React.Component {
  getHeight() {
    return this.area.offsetHeight;
  }

  getScrollHeight() {
    return this.area.scrollHeight;
  }

  handleTextarea = (e) => {
    const textContent = e.target.value;
    this.props.readContent(textContent);
  };

  render() {
    return (
      <textarea
        ref={(el) => (this.area = el)}
        onChange={(e) => this.handleTextarea(e)}
      ></textarea>
    );
  }
}

export default Textarea;
