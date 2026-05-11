import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
	state = {
		text: '',
		height: 35,
	};

	textareaRef = React.createRef();

	getSnapshotBeforeUpdate = (prevProps, prevState) => {
		const { areaHeight, areaScrollHeight } = this.textareaRef.current.getHeight();

		if (areaScrollHeight > areaHeight && areaHeight < 100) {
			return { newHeight: areaScrollHeight };
		}

		return null;
	};

	componentDidUpdate = (prevProps, prevState, snapshot) => {
		if (snapshot?.newHeight && snapshot.newHeight !== prevState.height) {
			this.setState({ height: snapshot.newHeight });
		}
	};

	addContent = data => {
		this.setState({ text: data });
	};

	render() {
		const { text, height } = this.state;

		return <Textarea height={height} ref={this.textareaRef} content={text} onAddContent={this.addContent} />;
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
