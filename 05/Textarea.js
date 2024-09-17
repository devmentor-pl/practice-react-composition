import React from 'react';

class Textarea extends React.Component {

    changeHandler = () => {
        this.props.updateState(this.textarea.value)
    }

    getOffsetHeight = () => {
        return this.textarea.offsetHeight
    }

    getScrollHeight = () => {
        return this.textarea.scrollHeight
    }
    
    changeElementHeight = () => {
        const height = this.getScrollHeight()
        this.textarea.style.height = `${height}px`
    }

    render() {
        return <textarea ref={el => this.textarea = el} onChange={this.changeHandler}></textarea>
    }
}

export default Textarea;