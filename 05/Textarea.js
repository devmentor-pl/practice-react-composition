import React from 'react';

class Textarea extends React.Component {
    render() {
        return <textarea ref={el => this.refArea = el} onChange={this.textHandler}></textarea>
    }

    getHeight() {
        return this.refArea.offsetHeight;
    }

    getScrollHeight() {
        return this.refArea.scrollHeight;
    }

    textHandler = e => {
        const textValue = e.target.value;
        this.props.getText(textValue)
    }
}

export default Textarea;