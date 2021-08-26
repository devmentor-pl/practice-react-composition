import React from 'react';

class Textarea extends React.Component {

    getTextAreaContent() {return this.text.value}
    getOffsetHeight() {return this.text.offsetHeight}
    getScrollHeight() {return this.text.scrollHeight}
    
    render() {
        const {content} = this.props;
        const {height} = this.props;
        return (
            <textarea
                onChange={this.props.changed}
                ref={(e) => (this.text = e)}
                value={content}
                style={{
                    height: height,
                    backgroundColor: 'lightgray',
                    fontSize: '16px',
                }}
            ></textarea>
        );
    }
}

export default Textarea;