import React from 'react';

class Form extends React.Component {
	state = {
		error: '',
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { onSubmit } = this.props;
		const userName = this.input.value;
		if (userName) {
			this.setState({ error: '' });
			onSubmit(userName);
			this.input.value = '';
		} else {
			this.setState({
				error: 'Podaj nazwę użytkownika...',
			});
		}
	};

	render() {
		const { error } = this.state;
		return (
			<section>
				<form onSubmit={this.handleSubmit}>
					<input ref={(node) => (this.input = node)} />
					<input type='submit' />
				</form>
				<p>{error !== '' ? error : null}</p>
			</section>
		);
	}
}

export default Form;
