import React from 'react';

class File extends React.Component {
    handleInput = (e) => {
        e.preventDefault();
        const files= [...this.input.files];
        const filesInfo = files.map(({name, size}) => ({name,size}));
        this.props.onChange(filesInfo);
    }

    render() {
        return <input type="file" multiple onChange={this.handleInput} ref={node=> this.input = node}/>
    }
}

export default File;