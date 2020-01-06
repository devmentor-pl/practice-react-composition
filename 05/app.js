import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        const textAreaHeight = this.textAreaRef.getHeight();
        const scrollHeight = this.textAreaRef.getScrollHeight();  

        if(scrollHeight > textAreaHeight && textAreaHeight < 100){
            return {resize:true};     
        } else {
            return {resize:false};
        }   
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot.resize){
           this.textAreaRef.updateTextAreaSize();
        }   
    }
    
    onChange = e => {
       this.setState({
            text : e.target.value,
       });  
    }

    render() {
        
        return (
            <Textarea ref={ref => this.textAreaRef = ref} onChange={this.onChange} />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));