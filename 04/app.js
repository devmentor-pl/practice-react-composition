import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
	state = {
		filesList: [],
	};
	handleFileRead = fileContent => {
		this.setState(prevState => {
			return {
				filesList: [...prevState.filesList, { content: fileContent, id: uuidv4() }]
			};
		});
	};
	render() {
		const { filesList } = this.state;
		return (
			<section>
				<File onFileRead={this.handleFileRead} />
				<List text={filesList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
