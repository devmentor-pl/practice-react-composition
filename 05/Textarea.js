import React from 'react';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
  }

  getSnapshotBeforeUpdate() {
    const shouldResize =
      this.textareaRef.current &&
      this.textareaRef.current.offsetHeight <
        this.textareaRef.current.scrollHeight;
    return { resize: shouldResize };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot.resize) {
      const newHeight = Math.min(this.textareaRef.current.scrollHeight, 100);
      this.textareaRef.current.style.height = `${newHeight}px`;
    }
  }

  handleChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };

  render() {
    return (
      <textarea
        ref={this.textareaRef}
        value={this.props.content}
        onChange={this.handleChange}
      />
    );
  }
}

export default Textarea;
