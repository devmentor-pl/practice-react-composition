import React from 'react';

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const textarea = this.textareaRef.current;
        if (!textarea) return null;

        const needsResize = textarea.scrollHeight > textarea.offsetHeight;
        return { needsResize };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!snapshot) return;
        const textarea = this.textareaRef.current;
        if (!textarea) return;

        if (snapshot.needsResize) {
            const newHeight = Math.min(textarea.scrollHeight, 100);
            if (textarea.offsetHeight !== newHeight) {
                textarea.style.height = newHeight + 'px';
            }
        }
    }

    render() {
        const { value, onChange } = this.props;
        return (
            <textarea
                ref={this.textareaRef}
                value={value}
                onChange={onChange}
                style={{ height: 'auto', overflowY: 'hidden', resize: 'none' }}
            ></textarea>
        ); 
    }
}

export default Textarea;