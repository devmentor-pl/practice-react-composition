import React from 'react';

class File extends React.Component {

    render() {
        return (
            <input
                type="file"
                ref={ref => this.input = ref}
                onChange={this.handleChange}
                multiple
            />
        )
    }

    handleChange = (e) => {
        e.preventDefault();

        const { onChange } = this.props;
        onChange(this.input.files);
    }
}

export default File;