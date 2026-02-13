import React from 'react';
import {v4 as uuid} from 'uuid'

class File extends React.Component {

    handleChange = (event) => {

        const files = Array.from(event.target.files)

    files.forEach((file) => {

        if(file.type !== 'text/plain') return

        const render = new FileReader()

        render.onload = (e) => {
            const fileData = {
                id: uuid(),
                name: file.name,
                content: e.target.result,
            }

            this.props.onFileLoad(fileData)
        }

        render.readAsText(file)
    });
    }
    render(){
        return (
            <div className="file-upload">
                <label className="file-upload__label">
                    Wybierz pliki
                <input 
                    className="file-upload__input"
                    type="file"
                    multiple
                    accept=".txt"
                    onChange={this.handleChange}
                />
                </label>
            </div>
        );
    }
}


export default File;