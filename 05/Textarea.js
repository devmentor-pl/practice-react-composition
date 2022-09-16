import React from 'react'

class Textarea extends React.Component {
  getSnapshotBeforeUpdate () {
    if ( this.textArea.offsetHeight < 100) return { resize: true }
    
    return { resize: false }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (snapshot.resize === true && this.textArea.scrollHeight > this.textArea.offsetHeight) this.textArea.style.height = this.textArea.scrollHeight + 'px'
  }

  render () {
    const { updateText,content } = this.props
    return <textarea ref={node => this.textArea = node} onChange={() => updateText(this.textArea.value) } value={content}/>
  }
}

export default Textarea
