import React from 'react';

class Textarea extends React.Component {
    getHeight() {
        return this.sec.offsetHeight;
    }

    getScrollHeight() {
        return this.sec.scrollHeight;
    }

    render() {
        const { content, onChange, /*onInput*/ height } = this.props;
        return <textarea value={content} onChange={onChange} /*onInput={onInput}*/ ref={el => this.sec = el} style={{ height: height }} ></textarea>
    }
}

export default Textarea;