import React from "react";

class Textarea extends React.Component {
  txtAreaRef = React.createRef();

  handleTextaAreaChange = () => {
    this.props.textChange(this.txtAreaRef.current.value);
  };

  getHeight() {
    return this.txtAreaRef.current.offsetHeight;
  }

  getScroll() {
    return this.txtAreaRef.current.scrollHeight;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    if (this.getHeight() < 100) {
      return { resize: true };
    } else {
      return { resize: false };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Height =", this.getHeight(), "Scroll =", this.getScroll());
    console.log(snapshot.resize)

    if(snapshot.resize && this.getHeight() < this.getScroll()){
      this.txtAreaRef.current.style.height = `${this.getScroll()}px`;
    }
  }

  render() {
    const { textChange } = this.props;

    return (
      <textarea
        onChange={this.handleTextaAreaChange}
        ref={this.txtAreaRef}
      ></textarea>
    );
  }
}

export default Textarea;
