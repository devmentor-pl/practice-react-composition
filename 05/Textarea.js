import React from 'react';

class Textarea extends React.Component {

    state = {
        height: 31 + 'px'
    }

    render() {
        const {height} = this.state;
        return <textarea style={{height}} onChange={this.handleTextarea} ref={el => this.textarea = el}></textarea>
    }

    handleTextarea = () => {
        const {addText} = this.props;
        const newText = this.textarea.value;
        addText(newText);
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        const height = this.textarea.offsetHeight;
        const scroll = this.textarea.scrollHeight
        console.log('height:' + height);
        console.log('scroll:' + scroll);

        if(height < scroll && height <= 100){
            return {resize:true};
        }
        return {resize:false};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(snapshot.resize);
        if(snapshot.resize){
            this.setState({
                height:this.textarea.scrollHeight
            })
        }
        return null
    }
}

export default Textarea;