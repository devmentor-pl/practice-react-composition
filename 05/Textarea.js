import React from 'react';

class Textarea extends React.Component {
    textRef = React.createRef();

    state = {
        height: 20
    }

    componentDidMount() {
        console.log(this.textRef.current.offsetHeight);
    }

    getSnapshotBeforeUpdate() {
        const { offsetHeight, scrollHeight } = this.textRef.current;
        if (offsetHeight < scrollHeight) {
            return { resize: true }
        } else {
            return { resize: false }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('compontentDidUpdate');
        console.log('snapshot', snapshot.resize);
        const { resize } = snapshot;
        if(resize) {
            this.setState({
                height: this.textRef.current.offsetHeight
            })
        }
    }

    render() {
        const { onChange, content } = this.props;
        return <textarea ref={ this.textRef } value={ content } onChange={ onChange } style={{ height: this.state.height }}></textarea>
    }
}

export default Textarea;