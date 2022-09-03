import React from 'react';

class Textarea extends React.Component {
    textareaRef = React.createRef()

    componentDidUpdate(props, state, snapshot) {
        const scroll = this.textareaRef.current.scrollHeight
        const height = this.textareaRef.current.offsetHeight
        if(snapshot.resize && height < scroll){
            this.textareaRef.current.style.height = `${scroll}px`     
        }
    }

    getSnapshotBeforeUpdate() {
        const height = this.textareaRef.current.offsetHeight
        if(height < 100){
            return {
                resize: true
            }
        } else {
            return {
                resize: false
            }
        }
    }

    render() {
        const {onChange, content} = this.props
        
        return <textarea ref={this.textareaRef}
            onChange={() => onChange(this.textareaRef.current.value)}
            value={content}></textarea>
    }
}

export default Textarea;