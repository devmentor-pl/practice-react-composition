import React from 'react';

class File extends React.Component {
	readFile = e => {
		const selectedFile = e.target.files;

		for (let i = 0; i < selectedFile.length; i++) {
			if (selectedFile && selectedFile[i].type.includes('text')) {
				const file = selectedFile[i];
				const reader = new FileReader();

				reader.onload = readerEvent => {
					const content = readerEvent.target.result;
					this.props.onFileRead(content);
				};
				
				reader.readAsText(file, 'UTF-8');
			} else {
				console.log('nie mozna odczytac pliku, upewnij sie ze chcesz odczytac plik tekstowy');
			}
		}
	};
	render() {
		return <input type='file' multiple onChange={this.readFile} />;
	}
}

export default File;
