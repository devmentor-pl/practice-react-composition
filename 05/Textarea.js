import React from 'react';

class Textarea extends React.Component {
    state = {
        size: 30,
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const inputHeight = this.input.offsetHeight;
        const inputScrollHeight = this.input.scrollHeight;
        if (inputHeight < inputScrollHeight && inputHeight <= 100) {
            return {
                resize: true
            };
        } else {
            return {
                resize: false
            };
        };
    };

    componentDidUpdate(prevProps, prevState, {resize}) {
        resize && this.setState({ size: this.input.scrollHeight });
    };

    render() {
        const { size } = this.state;
        return <textarea style={{height:`${size}px`}} value={this.props.content} onChange={(e) => { this.props.handleChange(e) }} ref={node => this.input = node}></textarea>
    };
};

export default Textarea;