import React from "react";

class Form extends React.Component {
	render() {
		const { onSubmit } = this.props;

		return (
			<form onSubmit={onSubmit}>
				<input defaultValue={"Fill the form"} ref={el => (this.ref = el)} />
				<input type='submit' />
			</form>
		);
	}
}

export default Form;
