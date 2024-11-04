import React from "react";

class File extends React.Component {
  render() {
    return <input onChange={this.props.handleChange} type="file" multiple />;
  }
}

export default File;
