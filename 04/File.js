import React from "react";

class File extends React.Component {

  render() {
    const {onChange} = this.props
    return (
      <input
        ref={(node) => (this.input = node)}
        onChange={onChange}
        type="file"
        multiple
      />
    );
  }


}

export default File;
