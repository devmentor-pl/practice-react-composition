import React from 'react';

class File extends React.Component {
    render() {
        const { onClick } = this.props;
        return <input onChange={ onClick } type="file" multiple />
    }
}

export default File;