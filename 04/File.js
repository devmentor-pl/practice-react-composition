import React from 'react'

class File extends React.Component {
	secRef = React.createRef()

	handleSubmit = () => {
		const fileInput = this.secRef.current
		const file = fileInput.files[0]
		if (file && file.type.includes('text')) {
			const reader = new FileReader()
			reader.onload = () => {
				const content = reader.result
				this.props.addFile(file, content)
			}
			reader.readAsText(file, 'UTF-8')
		}
	}

	// handleFile = file => {
	// 	const reader = new FileReader()
	// 	reader.onload = () => {
	// 		const content = reader.result
	// 	}
	// 	reader.readAsText(file, 'UTF-8')
	// }

	render() {
		return <input onChange={this.handleSubmit} ref={this.secRef} accept=".txt" type="file" multiple />
	}
}

export default File