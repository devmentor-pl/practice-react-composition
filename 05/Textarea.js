import React from 'react';

class Textarea extends React.Component {

    getTextAreaHeight() {
        return this.textarea.offsetHeight
    }

    getScrollTextAreaHeight() {
        return this.textarea.scrollHeight
    }

    getSnapshotBeforeUpdate = () => {
        if(this.getTextAreaHeight() < 100) {
            return {resize: true}
        } else {
            return {resize: false}
        }
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        const textAreaHeight = this.getTextAreaHeight()
        const textAreaScrollHeight = this.getScrollTextAreaHeight()

        if(textAreaHeight < textAreaScrollHeight && snapshot.resize === true) {
            this.textarea.style.height = `${textAreaScrollHeight}px`
        }
        console.log(`wysokosc przed aktualizacja: ${snapshot.height}`)
        console.log(`wysokosc po aktualizacji: ${this.textarea.offsetHeight}`)
    }

    render() {
        const {content, handleChange} = this.props
        return (
            <textarea 
                ref={el => this.textarea = el}
                onChange={() => handleChange(this.textarea.value)}
                value={content}
            />
        )
    }
}

export default Textarea;