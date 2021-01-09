import React from 'react';

class File extends React.Component {
  render() {
    return <input type='file' multiple onChange={this.props.uploaded} />;
  }
}

export default File;
