import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuid } from 'uuid';
import File from './File';
import List from './List';

class App extends React.Component {
	state = {
		filesList: [],
	};

	handleChange = (e) => {
		const fileList = e.target.files;

		for (const key in fileList) {
			if (Object.hasOwnProperty.call(fileList, key)) {
				const file = fileList[key];

				if (file && file.type.includes('text')) {
					this.addFile(file);
				} else {
					alert('Wybierz plik tekstowy!');
				}
			}
		}
	};

	addFile(file) {
		const reader = new FileReader();

		reader.onload = (readerEvent) => {
			const content = readerEvent.target.result;
			const newFile = {
				id: uuid(),
				name: file.name,
				size: file.size,
				content: content,
			};

			this.setState((state) => {
				return {
					filesList: [...state.filesList, newFile],
				};
			});
		};

		reader.readAsText(file, 'UTF-8');
	}

	render() {
		return (
			<section>
				<File onChange={this.handleChange} />
				<List data={this.state.filesList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
