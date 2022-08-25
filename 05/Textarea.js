import React from 'react';

class Textarea extends React.Component {    
    
    refTextarea = React.createRef();
    minHeight = this.props.minHeight;

    changeText = e => {        
        this.props.onChange(e.target.value);
    }

    getAreaHeight() {
        return this.refTextarea.current.offsetHeight;
    }
    
    getScrollHeight() {
        return this.refTextarea.current.scrollHeight;     
    }

    componentDidMount = () => {
        this.refTextarea.current.style.height = this.props.heightRange.min+'px';
    }

    getSnapshotBeforeUpdate = () => (this.getAreaHeight() < this.props.heightRange.max) ? { resize : true }  : { resize : false };

    componentDidUpdate = (props, state, snapshot) => {                                                          
        
        const scrollHeigth = this.getScrollHeight();
        const areaHeight = this.getAreaHeight();
        
        if (snapshot.resize && areaHeight < scrollHeigth ) {      
            this.refTextarea.current.style.height = `${this.getScrollHeight()}px`;            
        }
    }
   
    render() {
        const { content } = this.props;

        return <textarea ref = { this.refTextarea } value={ content } onChange={ this.changeText } ></textarea>
    }
}

export default Textarea;