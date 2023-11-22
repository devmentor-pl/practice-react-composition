import React from 'react';

class Textarea extends React.Component {
    txtRef = React.createRef();

    handleChange = () => {
        this.props.addText(this.txtRef.value);
    }
    getHeight() {
        return this.txtRef.current.offsetHeight;
    }
    getScroll() {
        return this.txtRef.current.scrollHeight;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if((this.getHeight() < 100) && (this.getHeight() < this.getScroll())) {
            return { resize: true}
        } else {
            return { resize: false}
        }   
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`height - ${this.getHeight()}, scroll - ${this.getScroll()}`)
         if(snapshot.resize) {
            this.txtRef.current.style.height = `${this.getScroll()}px`
         }
    }
    render() {
        return (
           <textarea onChange={this.handleChange}  ref={this.txtRef}></textarea>
        );
    }
    
}

export default Textarea;