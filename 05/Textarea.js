import React from 'react';

class Textarea extends React.Component {
    
    getHeight() {
        return this.textarea.offsetHeight;
    }

    getScrollHeight() {
        return this.textarea.scrollHeight;
    }

    handleInput = (e) =>  {
         e.preventDefault();
         this.props.onChange(this.textarea.value)
     }   


    render() {
        return <textarea ref = {item =>this.textarea = item} style = {this.props.style} onChange={this.handleInput}></textarea>
    }
}

export default Textarea;