import React from 'react';

class Textarea extends React.Component {
    state = {
        height: '30',
    }
    changeStateText = (e) => {
        this.props.changeState(e.target.value)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if(this.textRef.offsetHeight < this.textRef.scrollHeight) {
            return { resize: true }
        }
        return { resize: false }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot.resize) {
            this.setState({
                height: this.textRef.scrollHeight
            })
        }
    }

    render() {
        return <textarea style={{height: this.state.height, resize:'none'}} ref={ el => this.textRef = el} value={this.props.content} onChange={this.changeStateText} ></textarea>
    }
}

export default Textarea;