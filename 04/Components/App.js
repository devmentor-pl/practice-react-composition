import React from "react";
import { v4 as uuid } from "uuid";

import File from "./File";
import List from "./List";


export default class App extends React.Component {
    fileRef = React.createRef();

    state = {
        filesList: [],
    }

    handleFileLoad = () => {
        const files = this.fileRef.current.getFiles();

        for (const file of files) {
            if (file && file.type.includes('text/plain')) {
                this.readFile(file);
            } else {
                alert(`${file.name} has wrong file type!`);
            }
        }
    }

    readFile(file) {
        let reader = new FileReader();

        reader.onload = () => {
            const { name: fileName, size: fileSize } = file;
            const fileContent = reader.result;
            const fileObject = { id: uuid(), fileName, fileSize, fileContent };

            this.insertFilesListState(fileObject);
        }

        reader.readAsText(file);
    }

    insertFilesListState(fileData) {
        this.setState(state => {
            return {
                filesList: [...state.filesList, fileData],
            };
        });
    }

    render() {
        const { filesList } = this.state;
        const filesItems = filesList.map(
            ({ id, fileName, fileSize, fileContent }) =>
                <li key={id}>
                    <h3>File name: {fileName}</h3>
                    <small>File Size: {fileSize} bytes</small>
                    <p>File content: {fileContent}</p>
                </li>
        )

        return (
            <section>
                <File
                    ref={this.fileRef}
                    onChange={this.handleFileLoad}
                />
                <List>
                    {filesItems}
                </List>
            </section>
        )
    }
}