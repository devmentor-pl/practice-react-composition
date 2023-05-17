import React from "react";

class Textarea extends React.Component {
	handleChange = () => {
		const { addTextToState } = this.props;

		addTextToState(this.ref.value);
	};

	getOffsetHeight() {
		return this.ref.offsetHeight;
	}

	getScrollHeight() {
		return this.ref.scrollHeight;
	}

	render() {
		return (
			<textarea
				ref={el => (this.ref = el)}
				onChange={this.handleChange}></textarea>
		);
	}
}

export default Textarea;
