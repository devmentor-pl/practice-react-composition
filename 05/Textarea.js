import React from 'react'

class Textarea extends React.Component {
	secRef = React.createRef()

	getSnapshotBeforeUpdate() {
		return {
			offsetHeight: this.secRef.current.offsetHeight,
			scrollHeight: this.secRef.current.scrollHeight,
			resize: true,
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot.resize && snapshot.scrollHeight > snapshot.offsetHeight) {
			const newHeight = snapshot.scrollHeight <= 100 ? snapshot.scrollHeight : 100
			this.secRef.current.style.height = newHeight + 'px'
		}
	}

	handleChange = () => {
		const text = this.secRef.current.value
		this.props.addText(text)
	}

	render() {
		const textAreaStyles = {
			padding: '5px',
			resize: 'none',
		}

		return <textarea style={textAreaStyles} onChange={this.handleChange} ref={this.secRef}></textarea>
	}
}

export default Textarea