import React from 'react';

class Textarea extends React.Component {
    fitTextareaHeight() {
        return this.textarea.offsetHeight;
    }

    fitScroolTextAreaHeight() {
        return this.textarea.scroolHeight;
    }

   

    

    render() {
        const {content , handleChange} = this.props;

        return <textarea
        onChange={() => handleChange(this.textarea.value)} 
        ref={el => this.textarea = el} 
        value={content}
        />
        
    }
}

export default Textarea;