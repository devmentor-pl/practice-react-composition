import React from 'react';

class File extends React.Component {
    render() {
        const { onChange } = this.props;
        return <input type="file" multiple onChange={ev => onChange(ev)} />
    }
}

export default File;