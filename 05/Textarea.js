import React from 'react';

class Textarea extends React.Component {
    textareaRef = React.createRef();

    getSnapshotBeforeUpdate() {
        const el = this.textareaRef.current;
        const shouldResize = el.offsetHeight < el.scrollHeight;
        return { resize: shouldResize }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!snapshot || !snapshot.resize) return;
        const el = this.textareaRef.current;
        el.style.height = 'auto';
        const newHeight = Math.min(el.scrollHeight, 100);
        el.style.height = newHeight + 'px'
    }

    render() {
        return (
            <textarea
                ref={this.textareaRef}
                value={this.props.content}
                onChange={this.props.onChange}
            >
            </textarea>
        )
    }
}

export default Textarea;