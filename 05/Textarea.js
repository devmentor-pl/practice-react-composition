import React from 'react';

class Textarea extends React.Component {
    textAreaReference = React.createRef();
    state = {
        height: 50,
    }

    getSnapshotBeforeUpdate() {
        const { offsetHeight, scrollHeight } = this.textAreaReference.current;
        if (offsetHeight < scrollHeight && offsetHeight < 100) {
            return {resize: true}
        } else {
            return {resize: false}
        }
    }

    componentDidUpdate(snapshot) {
        console.log("componentDidUpdate");

        if (snapshot.resize) {
            this.setState({ height: this.textAreaReference.current.scrollHeight });
        }
    }

    render() {
        const { onChange, content } = this.props;
        return (
            <textarea
                value={content}
                onChange={onChange}
                ref={this.textAreaReference}
                style={{ height: this.state.height }}
            ></textarea>
        )
    }
}

export default Textarea;