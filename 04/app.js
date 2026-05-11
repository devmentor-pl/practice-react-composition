import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
	state = {
		filesList: [],
	};

	getFileData = data => {
		this.setState(prev => ({
			filesList: [...prev.filesList, data],
		}));
	};

	render() {
		const { filesList } = this.state;

		return (
			<section>
				<File onFileAdd={this.getFileData} />
				<List list={filesList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
