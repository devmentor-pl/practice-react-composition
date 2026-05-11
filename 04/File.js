import React from 'react';
import { v4 as uuid } from 'uuid';

class File extends React.Component {
	handleFileChange = e => {
		const files = e.target.files;
		if (!files.length) return;

		const { onFileAdd } = this.props;

		for (const file of files) {
			if (!file.type.startsWith('text/')) {
				alert(`Plik ${file.name} nie jest plikiem tekstowym`);
				continue;
			}
			const reader = new FileReader();

			reader.onload = e => {
				const fileData = {
					id: uuid(),
					content: e.target.result,
					name: file.name,
					size: file.size,
					type: file.type,
				};

				onFileAdd(fileData);
			};

			reader.readAsText(file, 'UTF-8');
		}
	};

	render() {
		return <input type='file' onChange={this.handleFileChange} multiple />;
	}
}

export default File;
