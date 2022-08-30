import React from 'react'

class Textarea extends React.Component {
  getSnapshotBeforeUpdate () {
    return { resize: true }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.textArea.scrollHeight > this.textArea.offsetHeight && snapshot.resize === true) {
      this.textArea.style.height = this.textArea.scrollHeight + 'px'
    }
  }

  render () {
    const { updateText } = this.props
    return <textarea ref={node => this.textArea = node} onChange={() => updateText(this.textArea.value)}></textarea>
  }
}

export default Textarea
