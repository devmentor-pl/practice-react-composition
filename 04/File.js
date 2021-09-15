import React from "react";
import { v4 as uuid } from "uuid";

class File extends React.Component {
    handleChange = (e) => {
        const { name, size, type } = e.target.files[0];
        const newFile = {
            name: name,
            size: size,
            type: type,
            key: uuid(),
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
