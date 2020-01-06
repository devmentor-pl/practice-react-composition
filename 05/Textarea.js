import React from 'react';

class Textarea extends React.Component {

    getHeight(){
        return this.sec.offsetHeight;
    }

    getScrollHeight(){
        return this.sec.scrollHeight;
    }
    updateTextAreaSize(){
        this.sec.rows += 1;
    }
    render() {
        const {onChange} = this.props;
        return <textarea  ref={el =>this.sec = el} onChange={onChange}></textarea>
    }
}

export default Textarea;