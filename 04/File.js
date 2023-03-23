import React from 'react';

class File extends React.Component {

    render() {
        const { handleChange, data } = this.props;
        return <input type="file" multiple onChange={handleChange} />

    }
}

export default File;