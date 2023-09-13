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
		return { resize: true }; // Zwracamy obiekt z informacją o resize
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		const height = this.refTA.offsetHeight;
		const scrlHeight = this.refTA.scrollHeight;

		if (height < scrlHeight && snapshot.resize && height < 100) {
			this.refTA.style.height = height + 10 + 'px';
		}
	}
	render() {
		return <textarea ref={el => (this.refTA = el)} onChange={this.changeTextarea}></textarea>;
	}
}

export default Textarea;
