import React from 'react';

class Textarea extends React.Component {
    getHeight() {
        return this.textarea.offsetHeight
    }

    getScrollHeight() {
        return this.textarea.scrollHeight
    }

    getSnapshotBeforeUpdate() {
        if (this.getHeight() < 100) {
            return { resize: true }
        }
        else return { resize: false }
    }

    componentDidUpdate(props, state, snapshot) {
        console.log(this.getHeight(), ' wysokość i ', this.getScrollHeight(), 'scrol ')
        if (snapshot.resize && this.getHeight() < this.getScrollHeight()) {
            this.textarea.style.height = `${this.getScrollHeight()}px`

        }
    }

    render() {
        const { content, textAreaChange } = this.props
        return <textarea
            onChange={() => textAreaChange(this.textarea.value)}
            ref={(e => this.textarea = e)}
            value={content}
        >
        </textarea >
    }
}

export default Textarea;