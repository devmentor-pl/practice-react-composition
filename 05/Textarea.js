import React from 'react';

class Textarea extends React.Component {

    getSnapshotBeforeUpdate() {
        const { offsetHeight } = this.txtArea;
        const maxHeight = 100;
        const shouldTextAreaResize = offsetHeight - maxHeight;
        return {
            shouldTextAreaResize
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { offsetHeight, scrollHeight } = this.txtArea;
        if (offsetHeight < scrollHeight && snapshot.shouldTextAreaResize <= 0) {
            this.txtArea.style.height = offsetHeight + 12 + 'px';
        }
    }
    render() { 
        return (
            <textarea
                ref={ el => this.txtArea = el }
                onChange={ this.props.handleChange }
            >
            </textarea>)
    }
}

export default Textarea;