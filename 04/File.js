import React from "react";

class File extends React.Component {
	handleFile = () => {
		const { addFile } = this.props;

		addFile(this.files.files);
	};

	render() {
		return (
			<input
				type='file'
				onChange={this.handleFile}
				multiple
				ref={el => (this.files = el)}
			/>
		);
	}
}

export default File;
