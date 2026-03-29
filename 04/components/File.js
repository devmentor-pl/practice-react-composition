import React from "react";

class File extends React.Component {
  render() {
    const handleChange = this.props.onChange;
    return <input type="file" multiple onChange={handleChange} />;
  }
}

export default File;
