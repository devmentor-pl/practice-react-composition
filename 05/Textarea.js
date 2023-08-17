import React from 'react';

class Textarea extends React.Component {
    changeHandler = () => {
        const { scrollHeight, offsetHeight, value } = this.textarea
        
        const resize = offsetHeight < scrollHeight
        console.log('resize: '+ resize)
        this.props.ifResize(resize)
        this.props.updateState(value)
        // this.textarea.style.height = '200px'
    }

    render() {
        return <textarea ref={el => this.textarea = el} onChange={this.changeHandler}></textarea>
    }
}

export default Textarea;