import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
        height: 20,
    };

    textUpdate = () => {
        let textAreaContent = this.textRef.getTextAreaContent();
        this.setState({text: textAreaContent});
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {

        let offsetHeight = this.textRef.getOffsetHeight();

        if (offsetHeight <= 100) {
            console.log(offsetHeight);
            return {resize: true};
        } else {
            return {resize: false};
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        let offsetHeight = this.textRef.getOffsetHeight();
        let scrollHeight = this.textRef.getScrollHeight();

        if (scrollHeight > offsetHeight && snapshot.resize === true) {
            this.setState({height: this.state.height + 10});
        }
    }

    render() {
        const {text, height} = this.state;
        return (
            <Textarea
                content={text}
                ref={(ref) => (this.textRef = ref)}
                changed={this.textUpdate}
                height={height}
            />
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));