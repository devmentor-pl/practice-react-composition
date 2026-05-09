import React from 'react';

class Form extends React.Component {
	onSubmitData = e => {
		e.preventDefault();

		const name = e.target.elements.userName.value;

		if (name.trim()) {
			this.props.onDataAdd(name);
			e.target.reset();
		}
	};

	render() {
		return (
			<section>
				<form onSubmit={this.onSubmitData}>
					<input name='userName' />
					<input type='submit' />
				</form>
			</section>
		);
	}
}

export default Form;
