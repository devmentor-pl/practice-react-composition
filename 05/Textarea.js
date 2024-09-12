import React from "react";

class Textarea extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.refArea.offsetHeight < 100) {
      return {
        resize: true,
      };
    }
    return {
      resize: false,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { offsetHeight, scrollHeight } = this.refArea;

    if (offsetHeight < scrollHeight && snapshot.resize) {
      this.refArea.style.height = `${scrollHeight + 1}px`;
    } else if (scrollHeight > 100) {
      this.refArea.style.height = `100px`;
    }
  }

  changeHandler = (e) => {
    const { setText } = this.props;
    const { value } = e.target;
    setText(value);
  };

  render() {
    return (
      <textarea
        ref={(el) => (this.refArea = el)}
        onChange={this.changeHandler}
        style={{ boxSizing: "border-box" }}
      >
        {this.props.content}
      </textarea>
    );
  }
}

export default Textarea;
