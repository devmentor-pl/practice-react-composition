import React from 'react';

class Textarea extends React.Component {
  getText() {
    return this.text.value;
  }
  render() {
    return (
      <textarea
        ref={(el) => (this.text = el)}
        onChange={this.props.changed}
      ></textarea>
    );
  }
}

export default Textarea;
