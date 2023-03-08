import React from 'react';

class Textarea extends React.Component {

    state = {
        height: 36
    }

    render() {
        const {height} = this.state;
        return <textarea></textarea>
    }
}

export default Textarea;