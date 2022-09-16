import React from 'react'
import {v4 as uuidv4} from 'uuid'

class File extends React.Component {

  handleChange = e => {
    e.preventDefault()
    const {addFile} = this.props
    const filesArray = [...this.input.files]

    filesArray.forEach(file => {
      if(file.type.includes('text')){
        const reader = new FileReader()

        reader.addEventListener('load', () => {
          const fileData = {
            name: file.name,
            size: file.size,
            content: reader.result,
            id: uuidv4()
          }
          addFile(fileData)
        },false)
        reader.readAsText(file)
      }
    })
  }

  render () {
    return (
      <input ref={node => this.input = node} type="file" onChange={this.handleChange} multiple />
    )
  }
}

export default File
