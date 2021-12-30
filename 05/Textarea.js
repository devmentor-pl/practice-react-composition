import React from 'react';

class Textarea extends React.Component {
    state = {
        size: '30',
    }

    render() {
        const style = {
            height: this.state.size + 'px',
    }
        return <textarea style={style} onChange={this.heightTranser} ref={node => this.textArea = node}></textarea>
    }

    heightTranser = () => {
        const {event} = this.props;
        event(this.textArea.offsetHeight);
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        const height = this.textArea.offsetHeight;
        const scroll = this.textArea.scrollHeight;

        if(height < scroll && height <= 100) {
            return {resize: true};
        }
        else {
            return {resize: false};
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot.resize) {
            this.setState({
                size: this.textArea.scrollHeight,
            })
        }
    }
}

export default Textarea;