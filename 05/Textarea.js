import React from 'react';
class Textarea extends React.Component {

    extraHeight = 10
    maxHeight = 100
    
    textAreaRef = React.createRef();

    handleText = () => {
        const  {changeTextArea} = this.props;
        const textAreaVaue = this.textAreaRef.current.value;

        changeTextArea(textAreaVaue)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        /*czemu to nie działa , źle zapisane? */
    //    const shouldResize = this.textAreaRef.current.offsetHeight > this.textAreaRef.current.scrollHeight &&  this.textAreaRef.current.offsetHeight <= 100 ? true: false

        return {
            shouldResize:  (this.textAreaRef.current.offsetHeight > this.textAreaRef.current.scrollHeight &&  this.textAreaRef.current.offsetHeight <= 100 ) ?
            true : false
        }
    }

       
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        
        const currentHeight = this.textAreaRef.current.offsetHeight;

        if(snapshot.shouldResize) {
        this.textAreaRef.current.style.height = `${currentHeight + this.extraHeight}px`
        }
    }

    render() {
        return <textarea ref={this.textAreaRef} onChange={this.handleText} > </textarea>
    }
}
export default Textarea;