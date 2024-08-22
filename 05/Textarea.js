import React from 'react';

class Textarea extends React.Component {
    getHeight() {
        return this.textarea.offsetHeight
    }
    getScrollHeight() {

        return this.textarea.scrollHeight
    }
    componentDidUpdate(props, state, snapshot) {

        if (snapshot.resize && this.getHeight() < this.getScrollHeight()) {

            this.textarea.style.height = `${this.getScrollHeight()}px`
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {

        if (this.getHeight() < 100)
            return {

                resize: true
            }
        return { resize: false }
    }

    render() {
        const { handleChange } = this.props
        return <textarea onChange={() => handleChange(this.textarea.value)} ref={el => this.textarea = el}></textarea>
    }
}

export default Textarea;