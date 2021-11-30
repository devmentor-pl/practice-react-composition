import React from 'react';

class File extends React.Component {
    handleChange = e => {
        e.preventDefault();
        this.props.addFile(this.input.files);
    }

    render() {
        return <input
            type="file"
            multiple
            onChange={this.handleChange}
            ref={node => this.input = node}
        />
    }
}

export default File;