import React from "react";

class File extends React.Component {
    handleChange = (e) => {
        const newFile = {
            name: e.target.files[0].name,
            size: e.target.files[0].size,
            type: e.target.files[0].type,
        };
        this.props.addFile(newFile);
    };

    render() {
        return (
            <input
                type="file"
                name="file"
                onChange={this.handleChange}
                multiple
            />
        );
    }
}

export default File;
