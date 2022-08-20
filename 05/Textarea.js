import React from 'react';

class Textarea extends React.Component {
    render() {
        return <textarea 
        ref={el => this.refText = el} onChange={this.handleTextArea}> 
        </textarea>
    }

    handleTextArea = e => {
        const content = e.target.value
        this.props.getContent(content)
    }

    getHeight() {
        return this.refText.offsetHeight
    }

    getScrollHeight() {
        return this.refText.scrollHeight
    }

}

export default Textarea;