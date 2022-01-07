import React from 'react';

class File extends React.Component {
    render() {
        const {func} = this.props;
        return <input onChange={func} type="file" multiple />
    }
}

export default File;