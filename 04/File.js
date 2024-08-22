import React from 'react';
import { v4 as uuid } from 'uuid';
class File extends React.Component {

    getData = e => {

        const file = e.target.files[0]

        const reader = new FileReader();
        reader.addEventListener("load", () => {

            const data = {
                size: file.size,
                name: file.name,
                content: reader.result,
                id: uuid()
            }
            this.props.passData(data)
        }, false)


        reader.readAsText(file)


    }
    render() {


        return <input type="file" ref={node => this.input = node} onChange={this.getData} multiple />
    }
}

export default File;