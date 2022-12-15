import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }
    areaRef =  React.createRef();
    update = (content) => {
        console.log(content)
        this.setState(state => {
            return {text: content}
        }
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
        const textArea = this.areaRef.current;
 
        if(textArea.getElementHeight() < textArea.getScrollHeight() && snapshot.resize === true){
            textArea.setHeight(textArea.getScrollHeight());
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        const textArea = this.areaRef.current;

        if(textArea.getElementHeight() > textArea.getScrollHeight()){
            return {resize: false}
        }else{
            return {
                resize: true
            }
        }
    }
    render() {
        const { text } = this.state;
        return (
            <Textarea updateContent={this.update} ref={this.areaRef} content={ text }/>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
