import React from 'react';

class Textarea extends React.Component {
    getHeight() {
        return this.txt.offsetHeight
    }
    render() {
        const { content } = this.props;
        return (
           <textarea ref={el => this.txt = el}></textarea>
        );
    }
    
}

export default Textarea;