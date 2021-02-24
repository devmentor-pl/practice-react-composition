import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }
    secRef = React.createRef();
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', this.secRef.current.offsetHeight);
        return {
        resize: true,
        }
    }
       
    handleText = (e) => {
        this.setState({ text: e.target.value });
        console.log();
        
        //this.secRef.current.offsetHeight = (this.secRef.current.scrollHeight)+"px";
    }
    componentDidUpdate (prevProps, prevState, snapshot) {
        
        if (snapshot.resize && this.secRef.current.offsetHeight < this.secRef.current.scrollHeight) {
            if(this.secRef.current.offsetHeight < 100) {
                this.secRef.current.style.height = this.secRef.current.scrollHeight +"px";
            }
            
        }
    }
    render() {
        console.log(this.state.text)
        const { text } = this.state;
        return (
            <Textarea refProp={this.secRef} content={ text } func={this.handleText}/>
        )
    }
    
}

ReactDOM.render(<App/>, document.querySelector('#root'));