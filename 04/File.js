import React from 'react';

class File extends React.Component {
	handleChange = () => {
		const { onChange } = this.props;
		const files = this.input.files;
		if (files) {
			Object.keys(files).forEach((i) => {
				const file = files[i];
				if (file.type.includes('text')) {
					const reader = new FileReader();
					reader.onload = (readerEvent) => {
						const fileData = {
							name: file.name,
							size: file.size,
							content: readerEvent.target.result,
						};
						onChange(fileData);
					};
					reader.readAsText(file);
				}
			});
		}
	};

	render() {
		return (
			<input
				type='file'
				multiple
				ref={(node) => (this.input = node)}
				onChange={this.handleChange}
			/>
		);
	}
}

export default File;
