import React from 'react';

class Textarea extends React.Component {
    addContent = (e) => {
        const content = e.target.value
        const {updateContent} = this.props;
        updateContent(content);
    }
    getScrollHeight(){
        return this.textarea.scrollHeight
    }
    getElementHeight() {
        return this.textarea.offsetHeight;
    }
    setHeight(value){
        if(value <= 100){
            this.textarea.style.height = value + 'px';
        }else{
            this.textarea.style.maxHeight = '100px';
        }
    }
    render() {
        return <textarea 
                    defaultValue={this.props.content} 
                    ref={el => this.textarea = el} 
                    onChange={(e) => this.addContent(e)}>
                </textarea>
    }
}

export default Textarea;