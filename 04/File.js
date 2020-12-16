import React from 'react';

class File extends React.Component {
        render() {
            const { onSubmit } = this.props
            return <input onChange={e => { onSubmit(e) }} type="file" multiple />
    }
}

export default File;