import React from 'react'

class File extends React.Component {
  handleChange = e => {
    const { addFile } = this.props
    e.preventDefault()

    const files = Array.from(this.input.files)

    this.readFiles(files)
    .then(data => addFile(data))

  }

  readFiles = (files) => {
    let filesPromises = []

    files.forEach(file => filesPromises.push(this.readFile(file)))

    return Promise.all(filesPromises)
  }

  readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {

        resolve({
            name: file.name,
            size: file.size,
            text: e.target.result
        })
      }
      reader.onerror = reject
      reader.readAsText(file)
    })
  }
  

  render () {
    return (
      <input ref={node => this.input = node} type="file" onChange={this.handleChange} multiple />
    )
  }
}

export default File
