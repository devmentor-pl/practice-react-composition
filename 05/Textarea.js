import React from "react";

class Textarea extends React.Component {
  render() {
    return <textarea ref={(el) => (this.refTextArea = el)}></textarea>;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return {
        height: this.refTextArea.offsetHeight
    }
  }
}

export default Textarea;
