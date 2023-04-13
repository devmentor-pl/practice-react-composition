import React from 'react';

class File extends React.Component {
    getFiles() {
        return this.inputRef.files;
    }

    render() {
        const { onChange } = this.props;

        return <input
            type="file"
            multiple
            ref={element => this.inputRef = element}
            onChange={onChange}
        />
    }
}

export default File;