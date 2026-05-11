import React from 'react';

class Textarea extends React.Component {
	handleTextarea = e => {
		const { onAddContent } = this.props;
		const content = e.target.value;
		onAddContent(content);
	};

	getHeight = () => {
		return {
			areaHeight: this.textarea.offsetHeight,
			areaScrollHeight: this.textarea.scrollHeight,
		};
	};

	render() {
		const { content, height } = this.props;

		return (
			<textarea
				ref={el => (this.textarea = el)}
				onInput={this.handleTextarea}
				value={content}
				style={{ height: height + 'px' }}
			/>
		);
	}
}

export default Textarea;
