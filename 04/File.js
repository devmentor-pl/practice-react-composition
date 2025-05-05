import React from 'react';

class File extends React.Component {

    handleChange = (e) => {

        const file = e.target.files[0];
        if (file) {
            this.props.handleReaderFile(file);
        }
    }
    
    render() {

        return <input type="file" multiple onChange={this.handleChange}/>
    }
}

export default File;