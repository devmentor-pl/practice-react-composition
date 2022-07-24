import React from 'react';

class File extends React.Component {
    render() {

        return <input onChange = {this.inputHandle} type="file" multiple ref={node => this.input = node}/>
    }


    inputHandle = () => {
        const {event} = this.props;
        const file = this.input.files[0];
        
        event(file);
    }
}

export default File;