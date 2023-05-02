import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
	state = {
		text: '',
		style: {},
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		const offsetHeight = this.textareaRef.getOffsetHeight();
		const scrollHeight = this.textareaRef.getScrollHeight();
		const { resize } = snapshot;

		if (offsetHeight < scrollHeight && resize) {
			this.setState({
				style: { height: scrollHeight + 'px' },
			});
		}
	}

	getSnapshotBeforeUpdate() {
		const scrollHeight = this.textareaRef.getScrollHeight();

		if (scrollHeight < 100) {
			return { resize: true };
		}
		return { resize: false };
	}

	inputChange = (e) => {
		const { value } = e.target;
		this.setState({
			text: value,
		});
	};

	render() {
		const { text } = this.state;
		return (
			<Textarea
				ref={(ref) => (this.textareaRef = ref)}
				content={text}
				onChange={this.inputChange}
				style={this.state.style}
			/>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
