import React from 'react';

class Textarea extends React.Component {
    getTextareaHeight() {
        return this.textarea.offsetHeight;
    }

    getScrollHeight() {
        return this.textarea.scrollHeight;
    }

    getContent() {
        return this.textarea.value;
    }

    render() {
        const { style, content, onChange } = this.props;
        return (
            <textarea
                value={content}
                ref={node => this.textarea = node}
                onChange={onChange}
                style={style}
            ></textarea>
        );
    };
}

export default Textarea;