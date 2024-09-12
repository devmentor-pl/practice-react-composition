import React from 'react';

class Textarea extends React.Component {
    txtRef = React.createRef();

    getOffsetHeight() {
        return this.txtRef.current.offsetHeight;
    }

    getScrollHeight() {
        return this.txtRef.current.scrollHeight;
    }

    render() {
        const { onChange } = this.props;
        return <textarea
            ref={this.txtRef}
            onChange={onChange}
        >
        </textarea >
    }
}

export default Textarea;