import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
        rows: 2,
    }

    addText = (text) =>{
        this.setState({
            text: text,
            });
    }

    addRows = () => {
        const {rows} = this.state;
        this.setState({
            rows: rows+1,
            });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        let sizeChange = false;
        if(this.textAreaRef.getHeight() >= 100){
            sizeChange = false;
        }
        else{ 
            sizeChange = true;
        }
        return {
            scroll: this.textAreaRef.getScrollHeight(),
            height: this.textAreaRef.getHeight(),
            resize: sizeChange
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let textAreaHeight = snapshot.height;
        const scrollHeight = snapshot.scroll;
        if((textAreaHeight < scrollHeight) && snapshot.resize===true){
            this.textAreaRef.setHeight();
        }
    }

    render() {
        const { text } = this.state;
        const {rows} = this.state;
        console.log(text);
        return (
            <Textarea rows={rows} addRows={this.addRows} add={this.addText}  ref={ref => this.textAreaRef = ref} />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));