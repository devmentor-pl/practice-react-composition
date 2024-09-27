import React from 'react';

class Textarea extends React.Component {

    textAreaRef = React.createRef()

    getSnapshotBeforeUpdate() {
        const offsetHeight = this.getOffsetHeight();
        
        if(offsetHeight < 100) {
            return true
        } else {
            return false
        }
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        const textarea = this.textAreaRef.current
        const offsetHeight = this.getOffsetHeight();
        const scrollHeight = this.getScrollHeight();

        if(snapshot && offsetHeight < scrollHeight) {
            textarea.style.height = `${scrollHeight}px`

        }
    }

    getOffsetHeight = () => {
        return this.textAreaRef.current.offsetHeight
    }

    getScrollHeight = () => {
        return this.textAreaRef.current.scrollHeight
    }

    
    render() {
        const {change, content} = this.props
        return <textarea 
        onChange={() => change(this.textAreaRef.current.value)} 
        ref={this.textAreaRef}
        value={content} />
    }
}

export default Textarea;