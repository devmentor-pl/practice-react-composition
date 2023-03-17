import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
	state = {
		filesList: [],
	};

	addFileInfo = (file) => {
		this.setState((state) => {
			return { filesList: [...state.filesList, file] };
		});
	};

	render() {
		return (
			<section>
				<File onChange={this.addFileInfo} />
				<List files={this.state.filesList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
