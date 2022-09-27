import React from "react";

class Textarea extends React.Component {
  render() {
    console.log('render');
    return <textarea onChange={e => this.props.handleChange(e.target.value)} ref={(el) => (this.refTextArea = el)}></textarea>;
  }
  getSnapshotBeforeUpdate = () => {
    if (this.getTextAreaHeight() < 100) {
      return { resize: true };
    } else {
      return { resize: false };
    }
  };
  getTextAreaHeight(){
    return this.refTextArea.offsetHeight
  }
  getScrollTextAreaHeight(){
    return this.refTextArea.scrollHeight
  }
  componentDidUpdate(props, state, snapshot){
    const scrollHeight = this.getScrollTextAreaHeight();
    console.log(this.getScrollTextAreaHeight(), this.getTextAreaHeight());
    if (snapshot.resize && this.getTextAreaHeight() < scrollHeight) {
      this.refTextArea.style.height = `${scrollHeight}px`
    }
  }
}

export default Textarea;
