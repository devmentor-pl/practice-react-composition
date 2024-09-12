import React from 'react';

class Textarea extends React.Component {
	textRef = React.createRef();

	getScrollHeight() {
		return this.textRef.current.scrollHeight;
	}

	getElementHeight() {
		return this.textRef.current.offsetHeight;
	}

	setHeight() {
		this.textRef.current.style.height = `${this.getScrollHeight()}px`;
	}

	render() {
		const { content, onChange } = this.props;
		return (
			<textarea
				ref={this.textRef}
				onChange={onChange}
				value={content}></textarea>
		);
	}
}

export default Textarea;
