import React from 'react';

class Textarea extends React.Component {



    render() {

        const { onChange, secRef, content, height } = this.props

        return <textarea style={{ height: height }} ref={secRef} onChange={onChange}></textarea>
    }
}

export default Textarea;