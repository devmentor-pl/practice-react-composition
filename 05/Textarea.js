import React from 'react';

class Textarea extends React.Component {
    textRef = React.createRef();
    state = {
        height: 30
    }

    getSnapshotBeforeUpdate = () => {
        const { offsetHeight, scrollHeight } = this.textRef.current
        return offsetHeight < scrollHeight && offsetHeight <= 100 ?
            { resize: true } : { resize: false }
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        const { scrollHeight } = this.textRef.current
        if (snapshot.resize) {
            this.setState({ height: scrollHeight })
        }
    }

    render() {
        const { onChange } = this.props
        return (
            <textarea
                style={{ 'height': this.state.height }}
                onChange={() => onChange(this.textRef)}
                ref={this.textRef}>
            </textarea>
        )
    }
}

export default Textarea;