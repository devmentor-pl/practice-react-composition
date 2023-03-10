import React from 'react';

class Form extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();

		const { onSubmit } = this.props;
		const userName = this.input.value;
		onSubmit(userName);

		this.input.value = '';
	};

	render() {
		return (
			<section>
				<form onSubmit={this.handleSubmit}>
					<input ref={(node) => (this.input = node)} />
					<input type='submit' />
				</form>
			</section>
		);
	}
}

export default Form;
