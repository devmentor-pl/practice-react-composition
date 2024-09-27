import React from 'react';

class Textarea extends React.Component {
	getOffsetHeight() {
		return this.sec.offsetHeight;
	}

	getScrollHeight() {
		return this.sec.scrollHeight;
	}

	render() {
		const { onChange, style } = this.props;
		return <textarea style={style} onChange={onChange} ref={(el) => (this.sec = el)}></textarea>;
	}
}

export default Textarea;
