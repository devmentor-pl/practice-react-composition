import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
	state = {
		text: '',
	};

	textRef = React.createRef();

	onChange = (e) => {
		const { value } = e.target;
		this.setState({
			text: value,
		});
	};

	getSnapshotBeforeUpdate(prevProps, prevState) {
		const element = this.textRef.current;
		if (element.getElementHeight() < 100) {
			return {
				resize: true,
			};
		} else {
			return {
				resize: false,
			};
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const element = this.textRef.current;
		if (
			element.getElementHeight() < element.getScrollHeight() &&
			snapshot.resize
		) {
			element.setHeight();
		}
	}

	render() {
		const { text } = this.state;
		return (
			<Textarea content={text} onChange={this.onChange} ref={this.textRef} />
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
