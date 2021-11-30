import React from 'react';

class Textarea extends React.Component {
  getText() {
    return this.text.value;
  }

  getOffsetHeight() {
    return this.text.offsetHeight;
  }

  getScrollHeight() {
    return this.text.scrollHeight;
  }

  render() {
    const { height } = this.props;
    return (
      <textarea
        ref={(el) => (this.text = el)}
        onChange={this.props.changed}
        style={{ height: height }}
      ></textarea>
    );
  }
}

export default Textarea;
