import React from 'react';

class File extends React.Component {
    render() {
        const {onChange}= this.props
        return <input type="file" multiple ref={ref => this.input = ref} onChange={onChange}/>
    }
}

export default File;