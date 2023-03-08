import React from 'react';

class Textarea extends React.Component {
    getTextAreaHeight() {
        return this.textarea.offsetHeight;
    }

    getScrollTextAreaHeight() {
        return this.textarea.scrollHeight;
    }

    componentDidUpdate(props, state, snapshot) {
        const scrollHeight = this.getScrollTextAreaHeight();
        if(snapshot.resize && this.getTextAreaHeight < scrollHeight) {
            this.textarea.style.height = `${scrollHeight}px`;
        }
    }

    getSnapshotBeforeUpdate = () => {
        if(this.getTextAreaHeight() < 100) {
            return {resize: true}
        } else {
            return {resize: false}
        }
    }

    render() {
        const {content} = this.props;
        return (
            <textarea
                onChange={ () => handleChange(this.textarea.value)}
                ref={el => this.textarea = el}
                value={content}>
            </textarea>
        )
    }
}

export default Textarea;