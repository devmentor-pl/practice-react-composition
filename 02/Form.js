import React from 'react'

class Form extends React.Component {
	secRef = React.createRef()

	handleSubmit = e => {
		e.preventDefault()
		this.props.onSubmit(this.secRef.current.value)
		this.secRef.current.value = ''
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input ref={this.secRef} placeholder="Wpisz imię i nazwisko" />
				<input type="submit" />
			</form>
		)
	}
}

export default Form