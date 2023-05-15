import React from "react";

class Form extends React.Component {
	componentDidMount() {
		console.log(this.ref.value);
	}

	handleSubmit = e => {
		e.preventDefault();

		const { onSubmit } = this.props;
		onSubmit(this.ref.value);
		this.ref.value = "";
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input defaultValue={"Fill the form"} ref={el => (this.ref = el)} />
				<input type='submit' />
			</form>
		);
	}
}

export default Form;
