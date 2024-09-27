import React from 'react';

class Form extends React.Component {
	render() {
		const { onSubmit, onChange, inpValue } = this.props;

		return (
			<form onSubmit={onSubmit}>
				<input
					value={inpValue}
					onChange={onChange}
				/>
				<input type='submit' />
			</form>
		);
	}
}

export default Form;
