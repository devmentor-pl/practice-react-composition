import React from 'react';

class Textarea extends React.Component {
    textareaRef = React.createRef()
    maxHeight = 100
    heightIncrement = 10

    onChange = () => {
        const {updateText} = this.props
        const actualText = this.textareaRef.current.value

        updateText(actualText)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return { shouldResize:(this.textareaRef.current.offsetHeight + this.heightIncrement <= this.maxHeight) ? true : false }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const scrollHeight = this.textareaRef.current.scrollHeight
        const offsetHeight = this.textareaRef.current.offsetHeight

        if((snapshot.shouldResize) && (scrollHeight > offsetHeight)) {
            this.textareaRef.current.style.height = `${offsetHeight + this.heightIncrement}px`
        } 
    }
    
    render() {
        return <textarea onChange={ this.onChange } ref={ this.textareaRef } ></textarea>
    }
}

export default Textarea;