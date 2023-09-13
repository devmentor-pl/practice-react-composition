import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
	state = {
		text: '',
	};

	textareaValue = text => {
		this.setState(prevState => {
			return {
				text: text,
			};
		});
	};

	render() {
		const { text } = this.state;
		return <Textarea content={text} onWrite={this.textareaValue} />;
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
