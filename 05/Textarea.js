import React from 'react';

class Textarea extends React.Component {
	state = {
		resize: false,
	};
	changeTextarea = e => {
		const newValue = e.target.value;
		this.props.onWrite(newValue);
	};
	getSnapshotBeforeUpdate(prevProps, prevState) {
		const height = this.refTA.offsetHeight;
		const scrlHeight = this.refTA.scrollHeight;

		if (height < scrlHeight && height < 100) {
			return { resize: true };
		}
		return null;
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		const height = this.refTA.offsetHeight;
		if (snapshot !== null && snapshot.resize) {
			this.refTA.style.height = height + 10 + 'px';
		}
	}
	render() {
		return <textarea ref={el => (this.refTA = el)} onChange={this.changeTextarea}></textarea>;
	}
}

export default Textarea;
