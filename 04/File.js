import React from 'react';

class File extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        if (this.input.files.length > 0) {
            this.props.onFilesSelected(this.input.files);
        }
    };

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input 
                    type="file" 
                    multiple
                    ref={ node => this.input = node } 
                />
                <input type='submit' />
            </form>
        )
    }
}

export default File;