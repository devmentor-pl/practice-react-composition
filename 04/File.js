import React from 'react';

class File extends React.Component {

    handleTap = (e) => {
       console.log(this.input.files); 
    }


    render() {
        return <input onChange={this.handleTap} ref = {element => this.input = element} type="file" multiple />
    }
}

export default File;