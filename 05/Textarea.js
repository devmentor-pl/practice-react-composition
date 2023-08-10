import React from "react";

class Textarea extends React.Component {
  handleChange = () => {
    const { updateState } = this.props;
    updateState(this.inputRef.value);
  };

  setHeight(height) {
    if (height > 100) {
      return (this.inputRef.style.height = "100px");
    }
    
    this.inputRef.style.height = `${height}px`;
  }

  getHeightAndScroll() {
    return {
      height: this.inputRef.offsetHeight,
      scroll: this.inputRef.scrollHeight,
    };
  }

  render() {
    return (
      <textarea
        onChange={this.handleChange}
        ref={(ref) => (this.inputRef = ref)}
        value={this.props.content}
      ></textarea>
    );
  }
}

export default Textarea;
