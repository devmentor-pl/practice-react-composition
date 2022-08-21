import React from 'react';

class Textarea extends React.Component {
    textareaRef = React.createRef();

    getText = (e) => {
        const text = e.target.value;
        // console.log(text)
        this.props.changeText(text);
        
    }

    getScrollHeight = () => {
        return this.textareaRef.current.scrollHeight
    }

    getOffSetHeight = () => {
        return this.textareaRef.current.offsetHeight
    }



    render() {
        const styles = {
            height: '40px'
        }
        return <textarea onChange={this.getText} ref={this.textareaRef} style={styles}></textarea>
    }
}

export default Textarea;