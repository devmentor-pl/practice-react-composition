import React from 'react';

class Form extends React.Component {
	state = {
		inputValue: '',
	};

	handleSubmit = e => {
		e.preventDefault();
		const { inputValue } = this.state;
		this.props.submit(inputValue);
		this.setState({ inputValue: '' });
	};

	handleInputChange = e => {
		this.setState({ inputValue: e.target.value });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input value={this.state.inputValue} onChange={this.handleInputChange} />
				<input type='submit' />
			</form>
		);
	}
}

export default Form;
