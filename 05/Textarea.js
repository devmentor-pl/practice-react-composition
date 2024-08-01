import React from 'react';

class Textarea extends React.Component {
    textRef = React.createRef()

    render() {
        const {content, onChange} = this.props
        return <textarea value={content} onChange={onChange} ref={this.textRef}></textarea>
    }

    getSnapshotBeforeUpdate(prevProps){
        if(prevProps.content !== this.props.content) {
            const textEl = this.textRef.current
            return {resize: textEl.offsetHeight < textEl.scrollHeight}
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot.resize && snapshot) {
            const textEl = this.textRef.current
            if(textEl.offsetHeight < textEl.scrollHeight && textEl.scrollHeight < 100) {
                textEl.style.height = `${textEl.scrollHeight}px`
            }
        }
    }
}

export default Textarea;