import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {


    state = {
        text: '',
        textAreaHeight: ''
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    areaRef = React.createRef()

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(this.areaRef.current.offsetHeight)
        console.log(this.areaRef.current.scrollHeight)

        return {
            height: this.areaRef.current.offsetHeight,
            scrollHeight: this.areaRef.current.scrollHeight
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update')
   
        if (snapshot.height < snapshot.scrollHeight && snapshot.height < 100) {
            this.state.textAreaHeight = snapshot.height
        }
       
    }

    componentDidMount() {
        console.log('mount')

    }

    render() {
        const { text } = this.state;

        return (
            <Textarea height={this.state.textAreaHeight} secRef={this.areaRef} onChange={this.onChange.bind(this)} content={text} />
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));