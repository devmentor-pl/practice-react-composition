import React from 'react';

class Textarea extends React.Component {
    render() {
        const {content, func, refProp} = this.props
        return <textarea ref={refProp} onChange={func} >{content}</textarea>
    }
}

export default Textarea;