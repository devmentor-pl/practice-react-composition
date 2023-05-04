import React from 'react';

class File extends React.Component {
	render() {
		const { onChange } = this.props;
		return (
			<input
				onChange={onChange}
				type='file'
				multiple
			/>
		);
	}
}

export default File;
