import React from 'react';

class Textarea extends React.Component {
    state = {
        size: '30',
    }
    // style={

    // }

    render() {
        return <textarea style={{height: this.state.size + 'px'}} onChange={this.heightTranser} ref={node => this.textArea = node}></textarea>
    }

    heightTranser = () => {
        const {event} = this.props;
        event(this.textArea.offsetHeight);
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        // const {content} = this.props;
        const height = this.textArea.offsetHeight;
        const scroll = this.textArea.scrollHeight;
        // console.log(prevProps, prevState);
        // console.log('getSnapshotBeforeUpdate');
        if(height < scroll && height <= 100) {

            return {resize: true};
        }
        else {
            return {resize: false};
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps, prevState)
        const {size} = this.state;
        if(snapshot.resize) {
            this.setState({
                size: this.textArea.scrollHeight,
            })
        }
    }
}

export default Textarea;