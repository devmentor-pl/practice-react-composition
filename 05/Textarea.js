import React from 'react';

class Textarea extends React.Component {
    shouldResizeTextarea() {
        const textarea = this.textarea;
        const isOverflowing = textarea.offsetHeight < textarea.scrollHeight;
        const isWithinHeightLimit = textarea.offsetHeight < 100;
        return isOverflowing && isWithinHeightLimit;
    }
    resizeTextarea() {
        const textarea = this.textarea;
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return { resize: this.shouldResizeTextarea() };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.resize) {
            this.resizeTextarea();
        }
    }

    render() {
        return (
            <textarea
                ref={(element) => (this.textarea = element)}
                value={this.props.content}
                onChange={this.props.onChange}
            ></textarea>
        );
    }
}