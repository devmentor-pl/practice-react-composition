import React from 'react';
import { v4 as uuid } from 'uuid';

class File extends React.Component {
	handleChange = () => {
		const { onChange } = this.props;
		const files = this.input.files;
		if (files) {
			Object.keys(files).forEach((i) => {
				const { name, type, size } = files[i];

				if (type.includes('text')) {
					const reader = new FileReader();
					reader.onload = (readerEvent) => {
						const fileData = {
							name: name,
							size: size,
							content: readerEvent.target.result,
							id: uuid(),
						};
						onChange(fileData);
					};

					reader.readAsText(files[i]);
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
